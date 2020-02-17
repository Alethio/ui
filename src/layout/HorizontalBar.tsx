import * as React from "react";
import styled, { css } from "styled-components";
import { Bar, IBarProps } from "./Bar";

interface IPlaceholderProps {
    height: number;
}

const Placeholder = styled.div<IPlaceholderProps>`
    height: ${props => props.height}px;
    width: 100%;
`;

const HorizontalBarRoot = styled(Bar)<IHorizontalBarProps>`
    height: ${props => props.height}px;

    width: 100%;
    ${props => props.sticky ? css`
    position: fixed;
    top: 0;
    ` : ""}
`;

interface IHorizontalBarProps extends IBarProps {
    height: number;
    sticky?: boolean;
    zIndex?: number;
    contentRef?(instance: HTMLDivElement): void;
}

/**
 * Displays a horizontal bar such as a sidebar or a horizontal toolbar
 */
export class HorizontalBar extends React.Component<IHorizontalBarProps> {
    render() {
        let { contentRef, ...props } = this.props;
        return (
            <>
            { this.props.sticky ? <Placeholder height={this.props.height} /> : null }
            <HorizontalBarRoot ref={contentRef} {...props} />
            </>
        );
    }
}
