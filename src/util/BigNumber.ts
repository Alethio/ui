// tslint:disable-next-line:import-blacklist
import { BigNumber as BN } from "bignumber.js";

// We depend only the type side of bignumber.js, we should make the instance side available
export type BigNumber = BN;
export type Format = BN.Format;
