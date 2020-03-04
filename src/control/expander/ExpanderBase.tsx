import * as React from "react";
import styled, { css, withTheme } from "../../styled-components";
import { Number } from "../../data/Number";
import { IBoxColors } from "../../layout/content/box/IBoxColors";
import { ITheme } from "../../theme/ITheme";
import { ExpanderBaseIcon } from "./ExpanderBaseIcon";

export interface IExpanderColors extends IBoxColors {
    value: string;
    icon: string;
    iconBackground: string;
}

export interface IExpanderColorsThunk<TTheme> {
    (theme: TTheme): IExpanderColors;
}

interface IExpanderRootProps {
    disabled?: boolean;
    colors: IExpanderBaseProps["colors"];
    onClick(): void;
}

const ExpanderRoot = styled<IExpanderRootProps, "div">("div")`
    display: flex;
    cursor: ${props => props.disabled ? "default" : "pointer"};
    user-select: none;
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;

    font-size: ${props => props.theme.spacing.expander.fontSize}px;
    line-height: ${props => props.theme.spacing.expander.lineHeight}px;
    font-weight: ${props => props.theme.spacing.expander.fontWeight};
    letter-spacing: ${props => props.theme.spacing.expander.letterSpacing};

    border: 1px solid ${props => (
        props.colors(props.theme).border ||
        props.colors(props.theme).background ||
        "transparent"
    )};
    border-radius: ${props => props.theme.spacing.borderRadius.thin}px;
    align-items: center;
    color: ${props => props.colors(props.theme).text};
    background-color: ${props => (
        props.colors(props.theme).background || "transparent"
    )};

    & > * { margin-left: 16px;}
`;

const ExpanderLabel = styled<IExpanderContentProps, "div">("div")`
    ${props => props.fullWidth ? css`
    width: 100%;
    ` : ``}
    margin-right: 20px;
`;

interface IExpanderValueProps {
    colors: IExpanderBaseProps["colors"];
}
const ExpanderValue = styled<IExpanderValueProps, "span">("span")`
    color: ${props => props.colors(props.theme).value};
    margin-left: 8px; /* these could be also 16px */
    margin-right: 8px; /* these could be also 16px */
`;

interface IExpanderContentProps {
    fullWidth?: boolean;
}

const ExpanderContent = styled<IExpanderContentProps, "div">("div")`
    display: flex;
    align-items: center;
    ${props => props.fullWidth ? css`
    width: 100%;

    & ${ExpanderValue} {
        flex-grow: 1;
        text-align: right;
    }
    ` : ``}
`;

const hasPropsWithValue = (props: IExpanderBaseProps): props is IExpanderWithValueProps => {
    return (props as IExpanderWithValueProps).value !== void 0;
};

export interface IExpanderWithValueProps extends IExpanderBaseProps {
    value?: number;
    locale: string;
}

export interface IExpanderWithoutValueProps extends IExpanderBaseProps {
    value?: never;
}

export interface IExpanderBaseProps {
    label: string;
    open: boolean;
    colors: IExpanderColorsThunk<ITheme>;
    /** Full width mode (expand to 100% of container) */
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?(): void;
    onResize?(): void;
}

export type IExpanderProps = IExpanderWithoutValueProps | IExpanderWithValueProps;

/** Component used for accordions and other expanding content */
class $ExpanderBase extends React.Component<IExpanderProps & { theme: ITheme; }> {
    render() {
        let value: number | undefined;
        let locale: string | undefined;
        if (hasPropsWithValue(this.props)) {
            value = this.props.value;
            locale = this.props.locale;
        }
        let { label, open, disabled, colors, theme } = this.props;
        let colorSet = colors(theme);

        return (
            <ExpanderRoot onClick={this.handleClick} disabled={disabled} colors={colors}>
                <ExpanderContent fullWidth={this.props.fullWidth}>
                    <ExpanderLabel fullWidth={this.props.fullWidth}>{label}</ExpanderLabel>
                    {value !== void 0 ?
                        <ExpanderValue colors={colors}>
                            <Number locale={locale!} value={value} />
                        </ExpanderValue>
                        : null}
                    <ExpanderBaseIcon expanded={open} color={colorSet.icon} backgroundColor={colorSet.iconBackground} />
                </ExpanderContent>
            </ExpanderRoot>
        );
    }

    private handleClick = () => {
        if (this.props.onClick && !this.props.disabled) {
            this.props.onClick();
        }
    }

    componentDidUpdate(prevProps: IExpanderProps) {
        if (prevProps.label !== this.props.label ||
            (prevProps as IExpanderWithValueProps).value !== (this.props as IExpanderWithValueProps).value
        ) {
            const onResize = this.props.onResize;
            if (onResize) {
                // setTimeout because of async rendering
                setTimeout(onResize);
            }
        }
    }
}

export const ExpanderBase = withTheme($ExpanderBase) as React.ComponentClass<IExpanderProps>;
