import { BigNumber, Format } from "../../BigNumber";
import { getNumberSeparator } from "./numberFormat";

interface IFormatterOptions {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}

/**
 * Outputs a formatted, localized string representation of a BigNumber,
 * in the same fashion as Number.prototype.toLocaleString
 *
 * @internal
 */
export class BigNumberFormatter {
    // HACK: We keep a static property of BigNumber Format objects and do lazy locale detection
    // to avoid having to pass this class with DI through the entire app.
    private static formats = new Map<string, Format>();

    private static getBnFormat(locale: string) {
        let fmt = this.formats.get(locale);
        if (!fmt) {
            fmt = {
                decimalSeparator: getNumberSeparator(locale, "decimal"),
                groupSeparator: getNumberSeparator(locale, "group"),
                groupSize: 3
            };
            this.formats.set(locale, fmt);
        }
        return fmt;
    }

    format(num: BigNumber, locale: string, options: IFormatterOptions = {}) {
        let fmt = BigNumberFormatter.getBnFormat(locale);
        num = num.decimalPlaces(options.maximumFractionDigits !== void 0 ? options.maximumFractionDigits : 3);

        if (options.minimumFractionDigits !== void 0) {
            let fractionDigits = num.decimalPlaces();
            if (fractionDigits < options.minimumFractionDigits) {
                return num.toFormat(options.minimumFractionDigits, fmt);
            }
        }
        return num.toFormat(fmt);
    }
}
