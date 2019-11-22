import * as React from "react";
import { Dropdown } from "./dropdown/Dropdown";
import { Menu } from "./menu/Menu";
import { MenuItem } from "./menu/MenuItem";
import { Expander } from "./expander/Expander";
import { IBoxProps } from "../layout/content/box/Box";
import { observer } from "mobx-react";
import { observable } from "mobx";
import styled, { css } from "../styled-components";

export interface ISelectProps {
    label?: string;
    default?: IOption;
    options: IOption[];
    fullWidth?: boolean;
}

interface IOption {
    id?: string; // DO WE NEED ???
    value: string;
    text: string;
    Icon?: IBoxProps["Icon"];
    disabled?: boolean;
}

interface IMenuItemContainerProps {
    selected: boolean;
}
const MenuItemContainer = styled<IMenuItemContainerProps, "div">("div")`
       ${props => props.selected ? css`
            background-color: pink; /*TODO decide color */
    ` : ``}
`;

@observer
export class Select extends React.Component<ISelectProps> {
    static defaultProps: Pick<ISelectProps, "label"> = {
        label: "Choose an option"
    };

    @observable private selected: IOption = this.props.default!;

    render() {
        let { label, options, fullWidth } = this.props;
        return <>
            <input type="hidden" value="" />
            <Dropdown<IOption>
                renderMenu={(onSelectItem) =>
                    <Menu>{options.map((option, index) =>
                        <MenuItemContainer selected={this.selected && this.selected.value === option.value}>
                            <MenuItem
                                Icon={option.Icon}
                                disabled={option.disabled}
                                onClick={() => {
                                    // console.log(option.value, index);
                                    onSelectItem(option);
                                }}>
                                {option.text}
                            </MenuItem>
                        </MenuItemContainer>
                    )}
                    </Menu>
                }
                onSelect={option => this.selected = option}>
                {({ requestToggle, isOpen }) =>
                    <Expander open={isOpen} onClick={requestToggle} fullWidth={fullWidth}
                        label={this.selected && this.selected.text || label!} />}
            </Dropdown>
        </>;
    }
}
