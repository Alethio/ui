import * as React from "react";
import { ITheme } from "../../../theme/ITheme";
import { IBoxProps, Box } from "./Box";
import { withTheme } from "../../../styled-components";

export interface IValueBoxProps {
    variant?: keyof ITheme["spacing"]["valueBoxMetrics"];
    colors?: keyof ITheme["colors"]["valueBox"] | IBoxProps["colors"];
    Icon?: IBoxProps["Icon"];
    iconPlacement?: "left" | "right";
    fullWidth?: boolean;
    theme: ITheme;
    className?: string;
    borderStyle?:  React.CSSProperties["borderStyle"];
}

const $ValueBox: React.StatelessComponent<IValueBoxProps> = ({
    children, className, Icon, iconPlacement, variant, colors, borderStyle, fullWidth, theme
}) => (
    <Box
        className={className}
        metrics={theme.spacing.valueBoxMetrics[variant!]}
        colors={typeof colors === "string" ? theme.colors.valueBox[colors!] : colors!}
        borderStyle={borderStyle}
        Icon={Icon}
        iconPlacement={iconPlacement}
        fullWidth={fullWidth}
    >{children}</Box>
);

/**
 * Box component with predefined settings via theme. For custom settings, use Box instead.
 */
export const ValueBox = withTheme($ValueBox);

ValueBox.defaultProps = {
    variant: "normal",
    colors: "primary",
    borderStyle: "solid"
};
