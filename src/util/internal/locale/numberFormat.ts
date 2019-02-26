/**
 * Returns the thousands (group) or decimal number separators for the given locale
 *
 * NB: Relies on Intl.NumberFormat and fallsback to simple detection with Number.prototype.toLocaleString()
 *
 * @internal
 */
export function getNumberSeparator(locale: string, separatorType: "decimal" | "group") {
    let numberFormat: any = Intl.NumberFormat(locale);

    if (numberFormat.formatToParts) {
        return numberFormat
            .formatToParts(1000.1)
            .find((part: any) => part.type === separatorType)
            .value as string;
    }

    if (separatorType === "group") {
        return (1000).toLocaleString().replace(/[0-9]/g, "");
    } else {
        return 1.1.toLocaleString().replace(/[0-9]/g, "");
    }
}
