import { observable, computed, action } from "mobx";
import { IGridFieldBase } from "./IGridFieldBase";
import { IGridFieldRendererObjectOrFn } from "./IGridFieldRenderer";
import { BigNumber } from "../../../util/BigNumber";

export interface IGridField<T> extends IGridFieldBase {
    renderer?: IGridFieldRendererObjectOrFn<T>;
    getFieldValue(t: T): string | number | BigNumber;
}

export class GridFields<TData> {
    @observable
    protected fields: IGridField<TData>[];

    @computed
    get gridFields() {
        return this.fields;
    }

    @computed
    get selectedGridFields() {
        return this.fields.filter(f => f.selected);
    }

    @action
    public setColumnSelect(key: string, select: boolean) {
        const field = this.fields.find((f) => {
            return key === f.fieldKey;
        });
        if (field) {
            field.selected = select;
        }
    }

    public get defaultSortedField(): IGridField<TData> | undefined {
        return void 0;
    }
}
