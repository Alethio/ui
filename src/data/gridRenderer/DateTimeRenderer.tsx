import * as React from "react";
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
import { DateTime } from "../DateTime";

export class DateTimeRenderer<T> implements IGridFieldRenderer<T> {
    constructor(
        private locale: string,
        private gridFieldDataGetter: (f: T) => number
    ) {
    }

    render(f: T) {
        return (
            <DateTime timestamp={this.gridFieldDataGetter(f)} locale={this.locale} />
        );
    }
}
