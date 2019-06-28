import * as React from "react";
import styled, { css } from "../../../../styled-components";
import { Label } from "../../../../data/Label";
import { IGridSortingOptions } from "../../state/IGridSortingOptions";
import { GridSortingOrder } from "../../state/GridSortingOrder";
import { IGridFieldBase } from "../../state/IGridFieldBase";
import { observer } from "mobx-react";

const GridHeaderHitBox = styled.div`
`;

interface IHeaderItemProps {
    isSortable: boolean;
    onClick(): void;
}
const HeaderItem = styled<IHeaderItemProps, "div">("div")`
    background: ${props => props.theme.colors.gridEvenRowBg};
    padding: 10px 8px 10px 32px;
    border-bottom: 1px solid ${props => props.theme.colors.gridBorder};
    cursor: ${props => props.isSortable ? "pointer" : "default"};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props => props.isSortable ? css`
        & ${Label} {
            padding: 0;
            ${GridHeaderHitBox}:hover & {
                color: ${props.theme.colors.gridHeaderHover};
            }
        }
    ` : css`
        & ${Label} {
            padding: 0;
        }
    `}
`;
const ArrowDown = styled.div`
    border-top: 5px solid ${props => props.theme.colors.selectBoxArrow};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin: 0 7px;
    ${GridHeaderHitBox}:hover & {
        border-top-color: ${props => props.theme.colors.gridHeaderHover};;
    }
`;
const ArrowUp = styled.div`
    border-bottom: 5px solid ${props => props.theme.colors.selectBoxArrow};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin: 0 7px;
    ${GridHeaderHitBox}:hover & {
        border-bottom-color: ${props => props.theme.colors.gridHeaderHover};;
    }
`;
const NoArrow = styled.div`
    width: 24px;
`;

interface IGridHeaderItemProps {
    field: IGridFieldBase;
    sortingOptions?: IGridSortingOptions;
    onClick?(field: IGridFieldBase): void;
}

/** @internal */
@observer
export class GridHeaderItem extends React.Component<IGridHeaderItemProps> {
    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.field);
        }
    }
    render() {
        return (
            <GridHeaderHitBox>
                <HeaderItem onClick={this.onClick} isSortable={this.props.field.isSortable}>
                    <Label>{ this.props.children }</Label>
                    { this.getHeaderSortArrow() }
                </HeaderItem>
            </GridHeaderHitBox>
        );
    }
    private getHeaderSortArrow() {
        if (!this.props.sortingOptions || this.props.sortingOptions.field !== this.props.field) {
            return <NoArrow />;
        }
        if (this.props.sortingOptions.order === GridSortingOrder.Ascending) {
            return <ArrowUp />;
        }
        if (this.props.sortingOptions.order === GridSortingOrder.Descending) {
            return <ArrowDown />;
        }
        return <NoArrow />;
    }
}
