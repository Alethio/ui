import * as React from "react";
import { IGridFieldRenderer } from "../../control/grid/state/IGridFieldRenderer";

export class OptionalDataRenderer<T, U extends T> implements IGridFieldRenderer<T> {
    constructor(
        private dataRenderer: IGridFieldRenderer<U>,
        /** Checks if data is available */
        private dataChecker: (f: T) => boolean
    ) {
    }

    render(f: T) {
        return (
            this.dataChecker(f) ?
                this.dataRenderer.render(f as U) :
                // cancel out any cell alignment and center the text
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    -
                </div>
        );
    }
}
