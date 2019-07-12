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
}

export class EthValue extends React.Component<IEthValueProps> {
    static defaultProps: Pick<IEthValueProps, "decimals"> = {
        decimals: 4
    };

    render() {
        return (
            new BigNumberFormatter().format(weiToEth(this.props.wei), this.props.locale, {
                minimumFractionDigits: 2,
                maximumFractionDigits: this.props.decimals!
            }) + (this.props.showSymbol ? " ETH" : "")
        );
    }
}
