import * as React from "react";
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
import { Hash } from "../Hash";

export class HashRenderer<T> implements IGridFieldRenderer<T> {
    constructor(
        private gridFieldDataGetter: (f: T) => string
    ) {
    }

    render(f: T) {
        let hash = this.gridFieldDataGetter(f);
        return (
            <Hash>{ hash }</Hash>
        );
    }
}
