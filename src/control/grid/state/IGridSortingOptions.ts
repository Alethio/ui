import { IGridFieldBase } from "./IGridFieldBase";
import { GridSortingOrder } from "./GridSortingOrder";

export interface IGridSortingOptions {
    field: IGridFieldBase | undefined;
    order: GridSortingOrder;
    setAscendingOrder(): void;
    setDescendingOrder(): void;
    setNextOrder(): void;
}
