import styled, { css } from "styled-components";
import * as React from "react";

interface ILayoutRowWrapperProps {
    className?: string;
    smallScreen?: boolean;
    centerContent?: boolean;
    onResize?(width: number): void;
}

class $LayoutRowWrapper extends React.Component<ILayoutRowWrapperProps> {
    private divElement: HTMLDivElement | null;
    private divWidth = 0;
    render() {
        return (
            <div className={this.props.className} ref={r => { this.divElement = r; }}>
                {this.props.children}
            </div>
        );
    }
    onResize = () => {
        if (this.props.onResize) {
            this.props.onResize(this.divWidth);
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    handleResize = () => {
        if (this.divElement) {
            this.divWidth = this.divElement.clientWidth;
            this.onResize();
        }
    }
}

/** @internal */
export const LayoutRowWrapper = styled($LayoutRowWrapper)`
    display: ${({ smallScreen }) => smallScreen ? "block" : "flex"};
    ${({ centerContent }) => centerContent ? css`
        justify-content: center;
    ` : ""};
`;
