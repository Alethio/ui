import * as React from "react";
import styled from "../../styled-components";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { GridLayout } from "./internal/GridLayout";
import { IGridSortingOptions } from "./state/IGridSortingOptions";
import { GridSortingOrder } from "./state/GridSortingOrder";
import { IGridFieldBase } from "./state/IGridFieldBase";
import { GridHeader, IGridHeaderAdditionalElements } from "./internal/header/GridHeader";
import { GridRow } from "./internal/GridRow";
import { GridHeaderItem } from "./internal/header/GridHeaderItem";
import { GridWrapper } from "./internal/GridWrapper";
import { GridFields, IGridField } from "./state/GridFields";
import { GridData } from "./internal/GridData";

const LoadMoreRows = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    cursor: pointer;
`;

const NoRowsAvailable = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
`;

export interface IGridDataRow<TData> {
    key: string | number;
    data: TData;
}

export interface IGridProps<TData> {
    rows: IGridDataRow<TData>[];
    /** Show "Load more" when maxVisibleRows is exceeded (default true) */
    limitRows?: boolean;
    /** How many rows to show before "Load more" is shown (default 50) */
    maxVisibleRows?: number;
    fields: GridFields<TData>;
    sortingOptions: IGridSortingOptions;
    additionalHeaderElements?: IGridHeaderAdditionalElements;
    noDataText: string;
    loadMoreText: string;
}

@observer
export class Grid<TData> extends React.Component<IGridProps<TData>> {
    static defaultProps = {
        maxVisibleRows: 50,
        limitRows: true
    };

    @observable
    private visibleRows: number;

    constructor(props: IGridProps<TData>) {
        super(props);

        this.updateVisibleRows();
    }

    componentDidUpdate(prevProps: IGridProps<TData>) {
        if (this.props.limitRows !== prevProps.limitRows || this.props.maxVisibleRows !== prevProps.maxVisibleRows) {
            this.updateVisibleRows();
        }
    }

    private updateVisibleRows() {
        this.visibleRows = this.props.limitRows ? this.props.maxVisibleRows! : Number.POSITIVE_INFINITY;
    }

    render() {
        const sortedRows = this.getSortedRows();

        return (
            <>
                <GridWrapper>
                    <GridLayout numberOfFields={this.props.fields.selectedGridFields.length}>
                        <GridHeader
                            onFieldsChange={this.setColumnSelect}
                            fields={this.props.fields.gridFields}
                            additionalElements={this.props.additionalHeaderElements}
                        >
                            {
                                this.props.fields.selectedGridFields.map((f: IGridFieldBase) => {
                                    return (
                                        <GridHeaderItem
                                            key={f.fieldKey}
                                            field={f}
                                            onClick={f.isSortable ? this.changeSorting : undefined}
                                            sortingOptions={this.props.sortingOptions}
                                        >
                                            {f.label}
                                        </GridHeaderItem>
                                    );
                                })
                            }
                        </GridHeader>
                        {
                            sortedRows.slice(0, this.visibleRows).map((row: IGridDataRow<TData>, idx: number) => {
                                return (
                                    <GridRow odd={!(idx % 2)} key={row.key}>
                                        {
                                            this.props.fields.selectedGridFields.map((
                                                f: IGridField<TData>
                                            ) => {
                                                return this.dataItemRenderer(f, row);
                                            })
                                        }
                                    </GridRow>
                                );
                            })
                        }
                    </GridLayout>
                </GridWrapper>
                { this.visibleRows < this.props.rows.length ?
                    <LoadMoreRows onClick={this.loadMoreRows} >
                        { this.props.loadMoreText }
                    </LoadMoreRows>
                : null }
                { this.props.rows.length === 0 ?
                    <NoRowsAvailable>
                        { this.props.noDataText }
                    </NoRowsAvailable>
                : null }
            </>
        );
    }

    private dataItemRenderer = (f: IGridField<TData>, row: IGridDataRow<TData>) => {
        if (f.renderer) {
            return (
                <GridData key={f.fieldKey} dataType={f.type}>{
                    typeof f.renderer === "function" ?
                        f.renderer(row.data) :
                        f.renderer.render(row.data)
                }</GridData>
            );
        }
        let data: React.ReactChild = f.getFieldValue(row.data).toString();
        return (
            <GridData key={f.fieldKey} dataType={f.type}>{data}</GridData>
        );
    }

    private changeSorting = (field: IGridFieldBase) => {
        if (this.props.sortingOptions.field !== field) {
            this.props.sortingOptions.setAscendingOrder();
        } else {
            this.props.sortingOptions.setNextOrder();
        }
        if (field !== undefined) {
            this.props.sortingOptions.field = field;
        }
    }

    private setColumnSelect = (key: string, checked: boolean) => {
        this.props.fields.setColumnSelect(key, checked);
    }

    private getSortedRows() {
        const sortOpts = this.props.sortingOptions;
        if (
            sortOpts.field === undefined ||
            sortOpts.order === GridSortingOrder.Default
        ) {
            return this.props.rows;
        }
        return [ ...this.props.rows ].sort((a, b) => {
            if (
                sortOpts.field === undefined ||
                sortOpts.order === GridSortingOrder.Default
            ) {
                return -1;
            }
            const aValue = (sortOpts.field as IGridField<{}>).getFieldValue(a.data);
            const bValue = (sortOpts.field as IGridField<{}>).getFieldValue(b.data);

            const compResult = typeof aValue !== "string" && typeof aValue !== "number" ?
                aValue.comparedTo(bValue) :
                this.defaultComparator(aValue, bValue as string | number);
            if (sortOpts.order === GridSortingOrder.Ascending) {
                return compResult;
            } else {
                return compResult *  -1;
            }
        });
    }

    /**
     * default comparator only for strings or numbers
     */
    private defaultComparator<T extends string | number>(a: T, b: T) {
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        return 1;
    }

    private loadMoreRows = () => {
        if (this.visibleRows < this.props.rows.length) {
            this.visibleRows += 50;
        }
    }

}
