import * as datetimeDifference from "datetime-difference";

type TimeUnit = "years" | "months" | "days" | "hours" | "minutes" | "seconds";
type RelativeTimeKey = "s" | "ss" | "m" | "mm" | "h" | "hh" | "d" | "dd" | "M" | "MM" | "y" | "yy";

export type IRelativeTimeTranslations = Record<RelativeTimeKey | "future" | "past", string>;

const defaultTranslations: IRelativeTimeTranslations = {
    future: "in %s",
    past: "%s ago",
    s: "1 second",
    ss: "%d seconds",
    m: "1 minute",
    mm: "%d minutes",
    h: "1 hour",
    hh: "%d hours",
    d: "1 day",
    dd: "%d days",
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years"
};

/** Maps time units used by datetime-difference to time unit codes for relative time localized strings  */
let unitCodes: Record<TimeUnit, RelativeTimeKey> = {
    years: "y",
    months: "M",
    days: "d",
    hours: "h",
    minutes: "m",
    seconds: "s"
};

export class RelativeTimeFormatter {
    constructor(private translations: IRelativeTimeTranslations = defaultTranslations) {
    }

    /**
     * Computes the date/time difference d1 - d2 and returns a formatted localized string
     * e.g. "5 days 6 hours ago", if d1 > d2
     *  or "in 5 days 6 hours", if d2 > d1
     *
     * @param d1 unix timestamp (millis)
     * @param d2 unix timestamp (millis)
     */
    formatDiff(d1: number, d2: number) {
        let formatted = this.format(d1, d2);
        return this.formatRelativeTime(formatted, d1 < d2);
    }

    /**
     * Formats an interval given in miliseconds to a human readable localized string
     * Computes the date/time difference d1 - d2 and returns a formatted localized string
     * e.g. "5 days 6 hours"
     *
     * @param intv number (millis)
     */
    formatInterval(intv: number) {
        let present = new Date().getTime();
        let before = present - intv;

        return this.format(present, before);
    }

    private format(d1: number, d2: number) {
        let diff = datetimeDifference(new Date(d1), new Date(d2));
        let units: TimeUnit[] = ["years", "months", "days", "hours", "minutes", "seconds"];
        let firstSignificantIdx = units.findIndex(unit => diff[unit] !== 0);
        if (firstSignificantIdx === -1) {
            // Time difference is 0
            return this.humanizeDiffUnit(0, "seconds");
        } else {
            let formatted = "";
            let firstUnit = units[firstSignificantIdx];
            formatted += this.humanizeDiffUnit(diff[firstUnit], firstUnit);

            // We don't show the 2nd time unit if 1st time unit is minutes or seconds
            if (firstSignificantIdx + 2 < units.length) {
                let secondUnit = units[firstSignificantIdx + 1];
                if (diff[secondUnit] !== 0) {
                    formatted += " " + this.humanizeDiffUnit(diff[secondUnit], secondUnit);
                }
            }

            return formatted;
        }
    }

    /**
     * Outputs a human readable text for a given time value + unit, with proper pluralization
     *
     * @param value uint
     * @param unit
     */
    private humanizeDiffUnit(value: number, unit: TimeUnit) {
        let unitCode = value === 1 ?
            unitCodes[unit] :
            unitCodes[unit] + unitCodes[unit] as RelativeTimeKey;

        return this.translations[unitCode].replace(/%d/i, "" + value);
    }

    /**
     * Format a human-readable time duration (e.g. "2 minutes") as past or future time
     * (e.g. "2 minutes ago" or "in 2 minutes")
     */
    private formatRelativeTime(value: string, future: boolean) {
        return this.translations[future ? "future" : "past"].replace(/%s/i, value);
    }
}
