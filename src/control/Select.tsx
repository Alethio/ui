import * as React from "react";
import { Dropdown } from "./dropdown/Dropdown";
import { Menu } from "./menu/Menu";
import { Option } from "./Option";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { ExpanderSelect } from "./expander/ExpanderSelect";
import { EmptyIcon } from "../icon/EmptyIcon";

export interface ISelectProps {
    name?: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onSelect?(x: string): void;
}

@observer
export class Select extends React.Component<ISelectProps> {

    static defaultProps: Pick<ISelectProps, "label"> = {
        label: "Choose an option"
    };

    @observable private selected: string;

    constructor(props: ISelectProps) {
        super(props);
        let { value, children } = props;
        if (!value) {
            if (children) {
                if (Array.isArray(children)) {
                    let selectedOption = (children as Option[]).filter(option => option.props.selected);
                    // this is geting first ocurence of selected (in HTML native it is the last)
                    value = selectedOption.length > 0 ? selectedOption[0].props.value : ""; // no selected options
                } else {
                    value = (children as Option).props.selected ? (children as Option).props.value : "";
                }
            } else {
                value = ""; // no option children
            }
        }
        this.selected = value;
    }

    getOptionLabel = (value: string) => {
        let { children } = this.props;
        if (Array.isArray(children)) {
            let selectedOption = (children as Option[]).filter((option: Option) => option.props.value === value);
            return selectedOption.length > 0 ? selectedOption[0].props.children as string : "";
        } else {
            return (children as Option).props.children as string;
        }
    }

    getIcon = (Icon: any, isIconPresent: boolean) => {
        if (Icon) {
            return Icon;
        } else {
            if (isIconPresent) {
                return EmptyIcon;
            } else {
                return false;
            }
        }
    }

    render() {
        let { label, fullWidth, children } = this.props;
        if (children) {
            children = Array.isArray(children) ? children as Option[] : [children as Option];
        }
        let isIconPresent = Array.isArray(children) ?
            !!(children as Option[]).find((option: Option) => option.props.Icon)
            : false;

        return <Dropdown<Option>
            renderMenu={(onSelectItem) =>
                <Menu>
                    {children ?
                        (children as Option[]).map((option: Option, index) => {
                            return <Option {...option.props}
                                key={index}
                                Icon={this.getIcon(option.props.Icon, isIconPresent)}
                                selected={option.props.value === this.selected}
                                onClick={() => {
                                    onSelectItem(option);
                                    if (this.props.onSelect) {
                                        this.props.onSelect(this.selected);
                                    }
                                }}
                            />;
                        })
                        : null
                    }
                </Menu>
            }
            onSelect={option => this.selected = option.props.value}>
            {({ requestToggle, isOpen }) =>
                <ExpanderSelect open={isOpen} onClick={requestToggle} fullWidth={fullWidth}
                    label={this.selected && this.getOptionLabel(this.selected) || label!} />}
        </Dropdown>;
    }
}
