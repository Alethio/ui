import * as React from "react";
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
import { ShortDate } from "../ShortDate";

export class ShortDateRenderer<T> implements IGridFieldRenderer<T> {
    constructor(
        private locale: string,
        private gridFieldDataGetter: (f: T) => number
    ) {
    }

    render(f: T) {
        return (
            <ShortDate timestamp={this.gridFieldDataGetter(f)} locale={this.locale} />
        );
    }
}
