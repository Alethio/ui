import * as React from "react";
import styled from "../../../../styled-components";
import { Checkbox } from "../../../Checkbox";
import { IGridFieldBase } from "../../state/IGridFieldBase";
import { SelectBox } from "../../../SelectBox";
import { AddIcon } from "../../../../icon/AddIcon";

interface IGridColumnSelectorProps {
    fields: IGridFieldBase[];
    onChange(key: string, checked: boolean): void;
}

const ColumnSelectorIconWrapper = styled.div`
    color: ${({theme}) => theme.colors.gridColumnSelector};
`;

/** @internal */
export class GridColumnSelector extends React.PureComponent<IGridColumnSelectorProps> {
    render() {
        let shownItems = this.props.fields.filter((f) => !f.alwaysVisible);
        if (shownItems.length === 0) {
            return null;
        }
        return (
            <div style={{padding: "4px"}}>
                <SelectBox offset={{left: -21, top: -45}} render={() =>
                    shownItems.map((f) => {
                        return <Checkbox
                            id={"column_" + f.fieldKey}
                            key={f.fieldKey}
                            name={f.fieldKey}
                            value={f.fieldKey}
                            checked={f.selected}
                            onChange={this.onCheckboxChange}
                        >{f.label}</Checkbox>;
                    })
                }>
                    <ColumnSelectorIconWrapper>
                        <AddIcon />
                    </ColumnSelectorIconWrapper>
                </SelectBox>
            </div>
        );
    }

    private onCheckboxChange = (
        _e: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
        name: string,
        _value: string
    ) => {
        this.props.onChange(name, checked);
    }
}
