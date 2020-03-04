import * as React from "react";

export interface IUsdValueProps {
    value: number;
    locale: string | undefined;
}

export class UsdValue extends React.Component<IUsdValueProps> {

    render() {
        const { value, locale } = this.props;

        return value.toLocaleString(locale, {
            currency: "USD",
            currencyDisplay: "symbol",
            style: "currency"
        });
    }
}
