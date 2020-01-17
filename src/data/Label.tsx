import styled, { css } from "../styled-components";
import * as React from "react";

export interface ILabelProps {
    /** @deprecated */
    arrow?: boolean;
    /** Use a stronger label color */
    strong?: boolean;
    /** Use uppercase text transformation */
    uppercase?: boolean;
    /** Use a disabled label color */
    disabled?: boolean;
    className?: string;
}

const $Label: React.StatelessComponent<ILabelProps> = ({ children, className }) => (
    <div className={className}>{children}</div>
);

/** Label suitable for form elements or data fields in a standard LayoutRow/LayoutRowItem layout */
export const Label = styled($Label)`
    font-size: 12px;
    line-height: 12px;
    height: 12px;
    text-transform: ${props => props.uppercase ? "uppercase" : "none"};
    background-color: ${props => (
        props.arrow ?
            (props.disabled ? props.theme.colors.label.disabled : props.theme.colors.base.highlight.color) :
            "transparent"
    )};
    font-weight: 600;
    letter-spacing: .5px;
    padding: 4px 8px;
    margin-right: ${props => props.arrow ? "10px" : "0"};
    color: ${props => (
        props.arrow ?
            props.theme.colors.base.highlight.contrast :
            props.strong ?
                (props.disabled ? props.theme.colors.label.disabled : props.theme.colors.label.strong) :
                props.disabled ?  props.theme.colors.label.disabled : props.theme.colors.label.default
    )};

    /**
     * When is the first label in a row the width of the container (LayoutRowItemWrapper) is 200px + 2*8px padding,
     * and the display: flex along with justify-content: flex-end ensures that the label is right aligned.
     * However, if the label is long enough (bigger than 200px) to wrap, the Label div will occupy all the container
     * width, and the text will be aligned to right thanks to the rule below.
     */
    text-align: right;

    ${props => props.arrow ? css`
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: -10px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid ${props.disabled ?
            props.theme.colors.label.disabled :
            props.theme.colors.base.highlight.color
        };
        transform: scaleX(.8);
        transform-origin: center left;
    }
    ` : ""}
`;

Label.defaultProps = {
    uppercase: true
};
