import * as React from "react";
import styled, { css } from "../styled-components";

const FloatingActionBarRoot = styled<IFloatingActionBarProps, "div">("div")`
    position: absolute;
    ${props => /^(.*)(top)(.*)$/.test(props.position || "bottom-right") ? css`
        top: 40px;
    ` : css`
        bottom: 40px;
    ` }
    ${props => /^(.*)(left)(.*)$/.test(props.position || "bottom-right") ? css`
        left: 40px;
    ` : css`
        right: 40px;
    ` }
    display: flex;

    & > * {
        margin-left: 16px;
    }

    & > *:first-child {
        margin-left: 0;
    }
`;

export interface IFloatingActionBarProps {
    /**
     * Position for floating action bar. Default is "bottom-right"
     */
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export class FloatingActionBar extends React.Component<IFloatingActionBarProps> {
    render() {
        return (
            <FloatingActionBarRoot {...this.props}>{this.props.children}</FloatingActionBarRoot>
        );
    }
}
