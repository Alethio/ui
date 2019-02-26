import * as React from "react";
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";
import { EthValue } from "../EthValue";
import { BigNumber } from "../../util/BigNumber";

export class EthRenderer<T> implements IGridFieldRenderer<T> {
    constructor(
        private locale: string,
        private gridFieldDataGetter: (f: T) => BigNumber,
        private options: {decimals?: number} = {}
    ) {
    }

    render(f: T) {
        return (
            <EthValue wei={this.gridFieldDataGetter(f)} locale={this.locale} showSymbol={false}
                decimals={this.options.decimals} />
        );
    }
}
