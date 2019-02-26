import * as React from "react";

interface IShortDateProps {
    /** Unix timestamp */
    timestamp: number;
    locale: string;
}

export class ShortDate extends React.PureComponent<IShortDateProps> {
    render() {
        let { timestamp, locale } = this.props;

        let value = new Date(timestamp * 1000).toLocaleDateString(locale, {
            timeZone: "UTC", year: "numeric", month: "short", day: "numeric"
        });

        return value;
    }
}
