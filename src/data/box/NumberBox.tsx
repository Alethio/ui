import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { Number } from "../Number";
import { BigNumber } from "../../util/BigNumber";

export interface INumberBoxProps {
    value: number | BigNumber;
    locale: string;
}

export class NumberBox extends React.Component<INumberBoxProps> {
    render() {
        let { value, locale } = this.props;
        return (
            <ValueBox><Number value={value} locale={locale} /></ValueBox>
        );
    }
}
