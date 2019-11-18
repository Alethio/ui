import * as React from "react";
import styled, { css } from "../styled-components";
import { Bar } from "./Bar";

interface IPlaceholderProps {
    width: number;
}

const Placeholder = styled<IPlaceholderProps, "div">("div")`
    width: ${props => props.width}px;
    @media ${props => props.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        display: none;
    }
`;

const VerticalBarRoot = styled(Bar)<IVerticalBarProps>`
    width: ${props => props.width}px;
    ${props => props.sticky ? css`
    position: fixed;
    height: 100%;
    ` : css`
    min-height: 100vh;
    `}
    flex-direction: column;

    @media ${props => props.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        ${props => props.sticky ? "" : css`
        position: absolute;
        top: 64px;
        bottom: 0;
        ` }

        top: 0;
        transition: transform .2s;
        ${props => props.mobileVisible ? "" : css`
        /**
         * Instead of hiding with "display: none" move it outside of viewport
         * so it could easily be opened from a hamburger menu or similar
         */
        left: 0;
        transform: translateX(-100%);
        ` }
    }
`;

interface IVerticalBarProps {
    width: number;
    sticky?: boolean;
    zIndex?: number;
    mobileVisible?: boolean;
    contentRef?(instance: HTMLDivElement): void;
}

/**
 * Displays a vertical bar such as a sidebar or a vertical toolbar
 */
export class VerticalBar extends React.Component<IVerticalBarProps> {
    render() {
        let { contentRef, ...props } = this.props;
        return (
            <>
            { this.props.sticky ? <Placeholder width={this.props.width} /> : null }
            <VerticalBarRoot innerRef={contentRef} {...props} />
            </>
        );
    }
}
