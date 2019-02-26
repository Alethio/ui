import * as React from "react";
import { ValueBox, IValueBoxProps } from "../../layout/content/box/ValueBox";
import { EthValue } from "../EthValue";
import { BigNumber } from "../../util/BigNumber";

export interface IEthValueBoxProps {
    /** Value in wei */
    wei: BigNumber;
    /** Maximum number of decimals to show (minimum 2) */
    decimals?: number;
    variant?: IValueBoxProps["variant"];
    locale: string;
    /** Defaults to highlight if wei is non-zero, or secondary otherwise */
    colors?: IValueBoxProps["colors"];
}

export class EthValueBox extends React.Component<IEthValueBoxProps> {
    render() {
        let { wei, locale, decimals } = this.props;
        let colors = this.props.colors || (wei.isGreaterThan(0) ? "primary" : "secondary");

        return (
            <ValueBox variant={this.props.variant} colors={colors}>
                <EthValue wei={wei} locale={locale} decimals={decimals} showSymbol={true} />
            </ValueBox>
        );
    }
}
