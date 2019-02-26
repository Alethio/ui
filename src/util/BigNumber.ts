// tslint:disable-next-line:import-blacklist
import { BigNumber } from "bignumber.js";

// We depend only the type side of bignumber.js, we should make the instance side available
export type BigNumber = BigNumber;
export type Format = BigNumber.Format;
