import * as React from "react";
import { ValueBox, IValueBoxProps } from "../../layout/content/box/ValueBox";
import { EthValue } from "../EthValue";
import { formatUsd } from "./UsdValueBox";
import { BigNumber } from "../../util/BigNumber";
import { weiToEth } from "../../util/internal/wei";

export interface IEthValueUsdBoxProps {
    /** Maximum number of decimals to show (minimum 2) */
    decimals?: number;
    variant?: IValueBoxProps["variant"];
    symbol?: string;
    locale: string;
    colors?: IValueBoxProps["colors"];
    /** Miner reward (in wei) - not present for Memento */
    wei: BigNumber;
    latestEthPrice: number | undefined;
}

export class EthUsdValueBox extends React.Component<IEthValueUsdBoxProps> {
    render() {
        let { locale, decimals, symbol, colors, wei: beneficiaryReward, latestEthPrice } = this.props;

        return (
            <ValueBox
                colors={colors} variant="normal">
                <EthValue wei={beneficiaryReward} locale={locale}
                    decimals={decimals} showSymbol={true} symbol={symbol} />
                { latestEthPrice ?
                <> =
                {" " +
                formatUsd(weiToEth(beneficiaryReward).multipliedBy(latestEthPrice).toNumber(),
                    this.props.locale)}
                </>
                : null }
            </ValueBox>
        );
    }
}
