import * as React from "react";
import { weiToEth } from "../util/internal/wei";
import { BigNumber } from "../util/BigNumber";
import { BigNumberFormatter } from "../util/internal/locale/BigNumberFormatter";

export interface IEthValueProps {
    /** Value in wei */
    wei: BigNumber;
    /** Maximum number of decimals to show */
    decimals?: number;
    locale: string;
    /** Display the currency symbol (ETH) ? */
    showSymbol?: boolean;
    /** Use a custom symbol (e.g. GöETH instead of ETH) */
    symbol?: string;
}

export class EthValue extends React.Component<IEthValueProps> {
    static defaultProps: Pick<IEthValueProps, "decimals" | "symbol"> = {
        decimals: 4,
        symbol: "ETH"
    };

    render() {
        return (
            new BigNumberFormatter().format(weiToEth(this.props.wei), this.props.locale, {
                minimumFractionDigits: 2,
                maximumFractionDigits: this.props.decimals!
            }) + (this.props.showSymbol ? " " + this.props.symbol : "")
        );
    }
}
