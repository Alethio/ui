import * as React from "react";
import { ValueBox, IValueBoxProps } from "../../layout/content/box/ValueBox";

export interface IUsdValueBoxProps {
    value: number;
    variant?: IValueBoxProps["variant"];
    locale: string | undefined;
    /** Defaults to secondary */
    colors?: IValueBoxProps["colors"];
}

export class UsdValueBox extends React.Component<IUsdValueBoxProps> {
    render() {
        let colors = this.props.colors || "secondary";

        return (
            <ValueBox variant={this.props.variant} colors={colors}>
                {this.formatUsd(this.props.value, this.props.locale)}
            </ValueBox>
        );
    }

    private formatUsd(value: number, locale?: string) {
        return value.toLocaleString(locale, {
            currency: "USD",
            currencyDisplay: "symbol",
            style: "currency"
        });
    }
}
