import * as React from "react";
import { ValueBox } from "../../layout/content/box/ValueBox";

interface IGasPercentageBoxProps {
}

export const GasPercentageBox: React.StatelessComponent<IGasPercentageBoxProps> = ({ children }) => (
    <ValueBox
        colors={(theme) => ({
            text: theme.colors.gasPercentageBoxText,
            background: theme.colors.valueBox.primary.background
        })}
    >
        { children }
    </ValueBox>
);
