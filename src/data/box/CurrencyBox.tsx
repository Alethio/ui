import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { Currency } from "../Currency";
import { BigNumber } from "../../util/BigNumber";

export interface ICurrencyBoxProps {
    value: number | BigNumber;
    symbol?: string;
    locale: string;
}

export class CurrencyBox extends React.Component<ICurrencyBoxProps> {
    render() {
        let { value, locale, symbol } = this.props;
        return (
            <ValueBox><Currency value={value} locale={locale} symbol={symbol} /></ValueBox>
        );
    }
}
