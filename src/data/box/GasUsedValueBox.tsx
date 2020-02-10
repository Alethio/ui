import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { Gauge } from "../vis/Gauge";
import { GasPercentageBox } from "./GasPercentageBox";
import { NumberBox } from "./NumberBox";
import { BigNumber } from "../../util/BigNumber";

export interface IGasUsedValueProps {
    value: BigNumber;
    limit: BigNumber;
    locale: string;
}

export class GasUsedValueBox extends React.Component<IGasUsedValueProps> {
    render() {
        let { value, limit, locale } = this.props;

        // We can loose precision here
        let percentFraction = value.dividedBy(limit).toNumber();

        return (
            <>
                { !limit.isZero() && <ValueBox>
                    <Gauge value={Math.floor(percentFraction * 100)} width={32} height={16} />
                </ValueBox> }
                <NumberBox value={value} locale={locale} />
                { !limit.isZero() && <GasPercentageBox>{percentFraction.toLocaleString(locale, {
                    style: "percent", minimumFractionDigits: 0, maximumFractionDigits: 2})
                }</GasPercentageBox> }
            </>
        );
    }
}
