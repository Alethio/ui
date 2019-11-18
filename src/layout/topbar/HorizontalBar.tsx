import * as React from "react";
import styled, { css } from "../../styled-components";
import { Bar } from "../Bar";

interface IPlaceholderProps {
    height: number;
}

const Placeholder = styled<IPlaceholderProps, "div">("div")`
    height: ${props => props.height}px;
    width: 100%;

    /**
     * TODO: Responsiveness css does not belong here, but because we must also put the css into the placeholder
     * we leave it here for now
     */
    display: none;
    @media ${props => props.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        display: block;
    }
`;

const HorizontalBarRoot = styled(Bar)<IHorizontalBarProps>`
    height: ${props => props.height}px;

    width: 100%;
    ${props => props.sticky ? css`
    position: fixed;
    top: 0;
    ` : ""}

    /**
     * TODO: Responsiveness css does not belong here, but because we must also put the css into the placeholder
     * we leave it here for now
     */
    display: none;
    @media ${props => props.theme.mediaQueries.breakPoints.smallerThanStandardView} {
        display: flex;
    }
`;

interface IHorizontalBarProps {
    height: number;
    sticky?: boolean;
    zIndex?: number;
    contentRef?(instance: HTMLDivElement): void;
}

/**
 * Flavor of HorizontalBar with responsive css. It shows only on small viewports
 */
export class HorizontalBar extends React.Component<IHorizontalBarProps> {
    render() {
        let { contentRef, ...props } = this.props;
        return (
            <>
            { this.props.sticky ? <Placeholder height={this.props.height} /> : null }
            <HorizontalBarRoot innerRef={contentRef} {...props} />
            </>
        );
    }
}
