import * as React from "react";
import { NumberFormatter } from "../util/internal/locale/NumberFormatter";

export interface IByteSizeProps {
    children: number;
    locale: string;
    /** Localized string: (e.g. "%d bytes") */
    format: string;
}

export class ByteSize extends React.Component<IByteSizeProps> {
    render() {
        return (
            this.props.format.replace(/%d/, new NumberFormatter().format(this.props.children, this.props.locale))
        );
    }
}
