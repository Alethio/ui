import * as React from "react";
import { ValueBox, IValueBoxProps } from "../../layout/content/box/ValueBox";
import { UsdValue } from "../UsdValue";

export interface IUsdValueBoxProps {
    value: number;
    variant?: IValueBoxProps["variant"];
    locale: string | undefined;
    /** Defaults to secondary */
    colors?: IValueBoxProps["colors"];
}

export class UsdValueBox extends React.Component<IUsdValueBoxProps> {
    render() {
        let colors = this.props.colors || "secondary";

        return (
            <ValueBox variant={this.props.variant} colors={colors}>
                <UsdValue value={this.props.value} locale={this.props.locale} />
            </ValueBox>
        );
    }
}
