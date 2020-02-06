import * as React from "react";
import { Dropdown } from "./dropdown/Dropdown";
import { Menu } from "./menu/Menu";
import { Option, IOptionProps } from "./Option";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { ExpanderSelect } from "./expander/ExpanderSelect";
import { EmptyIcon } from "../icon/EmptyIcon";

export interface ISelectProps {
    value?: string;
    placeholder?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    menuZIndex?: number;
    children?: React.ReactNode;
    onSelect?(x: string): void;
}

@observer
export class Select extends React.Component<ISelectProps> {

    static defaultProps: Pick<ISelectProps, "placeholder" | "menuZIndex"> = {
        placeholder: "Choose an option",
        menuZIndex: 9999
    };

    @observable private selected: string;

    constructor(props: ISelectProps) {
        super(props);
        this.updateSelectValue(props.value, props.children);
    }

    componentDidUpdate(prevProps: ISelectProps) {
        if (this.props.value !== prevProps.value || this.props.children !== prevProps.children) {
            this.updateSelectValue(this.props.value, this.props.children);
        }
    }

    private updateSelectValue(value: ISelectProps["value"], children: ISelectProps["children"]) {
        if (value === void 0) {
            let selectedOption = React.Children.toArray(children).find(
                // this is getting first occurence of selected (in native HTML it is the last)
                (option: Option) => option.props.selected);
            value = selectedOption ? (selectedOption as Option).props.value : ""; // no selected options
        }
        this.selected = value!;
    }

    getOptionLabel = (value: string) => {
        let { children } = this.props;
        let selectedOption = React.Children.toArray(children).find((option: Option) => option.props.value === value);
        return selectedOption ? (selectedOption as Option).props.children as string : "";
    }

    render() {
        let { placeholder, fullWidth, disabled, children } = this.props;
        let isIconPresent = !!(React.Children.toArray(children) as Option[]).find(
            (option: Option) => option.props.Icon);

        return <Dropdown<Option>
            renderMenu={(onSelectItem) =>
                <Menu>
                    {(React.Children.map(children, (option: Option) => {
                        return  React.cloneElement<IOptionProps>(option as any, {
                            Icon: isIconPresent ? option.props.Icon || EmptyIcon : option.props.Icon,
                            selected: option.props.value === this.selected,
                            onClick: () => onSelectItem(option)
                        });
                    }))}
                </Menu>
            }
            popoverProps={{style: {zIndex: this.props.menuZIndex}}}
            onSelect={option => {
                this.selected = option.props.value;
                if (this.props.onSelect) {
                    this.props.onSelect(this.selected);
                }
            }}>
            {({ requestToggle, isOpen }) =>
                <ExpanderSelect open={isOpen} onClick={requestToggle} fullWidth={fullWidth} disabled={disabled}
                    label={this.selected && this.getOptionLabel(this.selected) || placeholder!} />}
        </Dropdown>;
    }
}
