import { BigNumber } from "../BigNumber";

/** @internal */
export function weiToEth(wei: BigNumber) {
    return wei.shiftedBy(-18);
}

/** @internal */
export function ethToWei(eth: BigNumber) {
    return eth.shiftedBy(18);
}

/** @internal */
export function weiToGwei(wei: BigNumber) {
    return wei.shiftedBy(-9);
}
