import { GridSortingOrder } from "./GridSortingOrder";

export interface IGridFieldBase {
    fieldKey: string;
    label: string;
    type: string;
    isSortable: boolean;
    defaultSortOrder?: GridSortingOrder;
    selected: boolean;
    alwaysVisible?: boolean;
}
