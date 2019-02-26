import * as React from "react";
import { ValueBox, IValueBoxProps } from "../../layout/content/box/ValueBox";
import { weiToGwei } from "../../util/internal/wei";
import { BigNumberFormatter } from "../../util/internal/locale/BigNumberFormatter";
import { BigNumber } from "../../util/BigNumber";

export interface IGweiValueBoxProps {
    /** Value in wei */
    wei: BigNumber;
    variant?: IValueBoxProps["variant"];
    locale: string;
    colors?: IValueBoxProps["colors"];
}

export class GweiValueBox extends React.Component<IGweiValueBoxProps> {
    render() {
        return (
            <ValueBox variant={this.props.variant} colors={this.props.colors}>
                {this.formatGwei(weiToGwei(this.props.wei), this.props.locale)}
            </ValueBox>
        );
    }

    private formatGwei(value: BigNumber, locale: string) {
        return new BigNumberFormatter().format(value, locale, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4
        }) + " Gwei";
    }
}
