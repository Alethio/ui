import * as React from "react";
import { IGridFieldBase } from "../../state/IGridFieldBase";
import { AddIcon } from "../../../../icon/AddIcon";
import { Dropdown } from "../../../dropdown/Dropdown";
import { Menu } from "../../../menu/Menu";
import { MenuItem } from "../../../menu/MenuItem";
import { IconButton } from "../../../IconButton";
import { Checkbox } from "../../../Checkbox";

interface IGridColumnSelectorProps {
    fields: IGridFieldBase[];
    onChange(key: string): void;
}

/** @internal */
export class GridColumnSelector extends React.PureComponent<IGridColumnSelectorProps> {
    render() {
        return (
            <div style={{padding: "4px"}}>
                <Dropdown<string>
                    renderMenu={(onSelectItem) => <Menu>
                        { this.props.fields.map((f) =>
                            <MenuItem
                                Icon={() => <Checkbox checked={f.selected} disabled={f.alwaysVisible} />}
                                key={f.fieldKey} onClick={() => onSelectItem(f.fieldKey)}
                                disabled={f.alwaysVisible}
                            >
                                {f.label}
                            </MenuItem>
                        ) }
                    </Menu> }
                    onSelect={this.props.onChange}
                    closeOnSelect={false}
                >{ ({ requestToggle }) =>
                    <IconButton
                        Icon={AddIcon}
                        color={theme => theme.colors.gridColumnSelector}
                        onClick={requestToggle}
                    />
                }</Dropdown>
            </div>
        );
    }
}
