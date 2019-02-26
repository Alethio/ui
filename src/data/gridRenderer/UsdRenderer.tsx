import * as React from "react";
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
import { UsdValueBox } from "../box/UsdValueBox";

export class UsdRenderer<T> implements IGridFieldRenderer<T> {
    constructor(
        private locale: string,
        private gridFieldDataGetter: (f: T) => number
    ) {
    }

    render(f: T) {
        let bigN = this.gridFieldDataGetter(f);
        return (
            <UsdValueBox value={bigN} locale={this.locale} variant="smallThin" colors="primary" />
        );
    }
}
