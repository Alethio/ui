import * as React from "react";
import styled, { css } from "../../styled-components";
import { Number } from "../../data/Number";
import { IBoxColors } from "../../layout/content/box/IBoxColors";
import { ITheme } from "../../theme/ITheme";
import { IBoxColorsThunk } from "../../layout/content/box/IBoxColorsThunk";
import { ExpanderBaseIcon } from "./ExpanderBaseIcon";

interface IExpanderRootProps {
    disabled?: boolean;
    colors: IBoxColors | IBoxColorsThunk<ITheme>;
    onClick(): void;
}

const getColors = (colors: IBoxColors | IBoxColorsThunk<ITheme>, theme: ITheme) => {
    if (typeof colors === "function") {
        return colors(theme);
    }
    return colors;
};

const ExpanderRoot = styled<IExpanderRootProps, "div">("div")`
    display: flex;
    cursor: ${props => props.disabled ? "default" : "pointer"};
    user-select: none;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out;

    font-size: ${props => props.theme.colors.expander.fontSize}px;
    line-height: ${props => props.theme.colors.expander.lineHeight}px;
    font-weight: ${props => props.theme.colors.expander.fontWeight};
    letter-spacing: ${props => props.theme.colors.expander.letterSpacing};

    border: 1px solid ${props => (
        getColors(props.colors, props.theme).border ||
        getColors(props.colors, props.theme).background ||
        "transparent"
    )};
    border-radius: 4px;
    align-items: center;
    color: ${props => getColors(props.colors, props.theme).text};
    background-color: ${props => (
        getColors(props.colors, props.theme).background || "transparent"
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
    open: boolean;
    disabled?: boolean;
}
const ExpanderValue = styled<IExpanderValueProps, "span">("span")`
    color: ${props => props.disabled ?
        props.theme.colors.expanderDisabled :
        props.open ? props.theme.colors.expanderOpenValue : props.theme.colors.expanderValue};
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
    colors: IBoxColors | IBoxColorsThunk<ITheme>;
    /** Full width mode (expand to 100% of container) */
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?(): void;
    onResize?(): void;
    iconColor(theme: ITheme): string | undefined;
}

export type IExpanderProps = IExpanderWithoutValueProps | IExpanderWithValueProps;

/** Component used for accordions and other expanding content */
export class ExpanderBase extends React.Component<IExpanderProps> {
    render() {
        let value: number | undefined;
        let locale: string | undefined;
        if (hasPropsWithValue(this.props)) {
            value = this.props.value;
            locale = this.props.locale;
        }
        let { label, open, disabled, colors, iconColor: iconColor } = this.props;
        return (
            <ExpanderRoot onClick={this.handleClick} disabled={disabled} colors={colors}>
                <ExpanderContent fullWidth={this.props.fullWidth}>
                    <ExpanderLabel fullWidth={this.props.fullWidth}>{label}</ExpanderLabel>
                    {value !== void 0 ?
                        <ExpanderValue open={open} disabled={disabled}>
                            <Number locale={locale!} value={value} />
                        </ExpanderValue>
                        : null}
                    <ExpanderBaseIcon expanded={open} getColor={iconColor} />
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
