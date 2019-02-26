import * as React from "react";
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
import { Number } from "../Number";
import { BigNumber } from "../../util/BigNumber";

export class NumberRenderer<T> implements IGridFieldRenderer<T> {
    constructor(
        private locale: string,
        private gridFieldDataGetter: (f: T) => number | BigNumber
    ) {
    }

    render(f: T) {
        let bigN = this.gridFieldDataGetter(f);

        return (
            <Number value={bigN} locale={this.locale} />
        );
    }
}
