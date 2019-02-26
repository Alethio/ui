import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";
import { DifficultyFormatter } from "../../util/internal/locale/DifficultyFormatter";
import { BigNumber } from "../../util/BigNumber";
import { BigNumberFormatter } from "../../util/internal/locale/BigNumberFormatter";

export interface IDifficultyBoxProps {
    value: BigNumber;
    locale: string;
}

export class DifficultyBox extends React.Component<IDifficultyBoxProps> {
    render() {
        let difficultyFormatter = new DifficultyFormatter(new BigNumberFormatter());

        return (
            <ValueBox>{ difficultyFormatter.format(this.props.value, this.props.locale) }</ValueBox>
        );
    }
}
