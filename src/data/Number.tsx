import * as React from "react";
import { NumberFormatter } from "../util/internal/locale/NumberFormatter";
import { BigNumber } from "../util/BigNumber";
import { BigNumberFormatter } from "../util/internal/locale/BigNumberFormatter";

export interface INumberProps {
    value: number | BigNumber;
    locale: string;
}

export class Number extends React.Component<INumberProps> {
    render() {
        let { value, locale } = this.props;
        return typeof value !== "number" ?
            new BigNumberFormatter().format(value, locale) :
            new NumberFormatter().format(value, locale);
    }
}
