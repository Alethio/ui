import * as React from "react";
import { Dropdown } from "./dropdown/Dropdown";
import { Menu } from "./menu/Menu";
import { MenuItem } from "./menu/MenuItem";
import { IBoxProps } from "../layout/content/box/Box";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { ExpanderSelect } from "./expander/ExpanderSelect";

export interface ISelectProps {
    name?: string;
    label?: string;
    default?: IOption;
    options: IOption[];
    disabled?: boolean;
    fullWidth?: boolean;
}

interface IOption {
    value: string;
    text: string;
    Icon?: IBoxProps["Icon"];
    disabled?: boolean;
}

@observer
export class Select extends React.Component<ISelectProps> {
    static defaultProps: Pick<ISelectProps, "label"> = {
        label: "Choose an option"
    };

    @observable private selected: IOption = this.props.default!;

    render() {
        let { label, options, fullWidth } = this.props;
        return <>
            <input type="hidden" name={this.props.name} value={this.selected && this.selected.value} />
            <Dropdown<IOption>
                renderMenu={(onSelectItem) =>
                    <Menu>{options.map((option, index) =>
                        <MenuItem
                            selected={this.selected && this.selected.value === option.value}
                            Icon={option.Icon}
                            key={"option_" + index}
                            disabled={option.disabled}
                            onClick={() => {
                                onSelectItem(option);
                            }}>
                            {option.text}
                        </MenuItem>
                    )}
                    </Menu>
                }
                onSelect={option => this.selected = option}>
                {({ requestToggle, isOpen }) =>
                    <ExpanderSelect open={isOpen} onClick={requestToggle} fullWidth={fullWidth}
                        label={this.selected && this.selected.text || label!} />}
            </Dropdown>
        </>;
    }
}
