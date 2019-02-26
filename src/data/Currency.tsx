import * as React from "react";
import { BigNumber } from "../util/BigNumber";
import { Number } from "./Number";

export interface ICurrencyProps {
    value: number | BigNumber;
    locale: string;
    symbol?: string;
}

export class Currency extends React.Component<ICurrencyProps> {
    render() {
        let { value, locale, symbol } = this.props;
        return (
            <>
                <Number value={value} locale={locale}></Number>
                { symbol ? " " + symbol : "" }
            </>
        );
    }
}
