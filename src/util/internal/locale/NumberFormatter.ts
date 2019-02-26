/** @internal */
export class NumberFormatter {
    format(value: number, locale: string) {
        return value.toLocaleString(locale);
    }
}
