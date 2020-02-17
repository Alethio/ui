import * as React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CLASS_NAME = "height-transition";

interface IHeightRootProps {
    computedHeight: number | undefined;
    duration: number;
}

const HeightRoot = styled.div<IHeightRootProps>`
    & .${CLASS_NAME}-enter,
    & .${CLASS_NAME}-exit {
        transition: height ${props => props.duration}s ease-in-out;
        overflow: hidden;
    }

    & .${CLASS_NAME}-enter {
        height: 0;
    }

    & .${CLASS_NAME}-enter-active {
        height: ${props => props.computedHeight ? props.computedHeight + "px" : "auto"};
    }

    & .${CLASS_NAME}-enter-done {
    }

    & .${CLASS_NAME}-exit {
        height: ${props => props.computedHeight ? props.computedHeight + "px" : "auto"};
    }

    & .${CLASS_NAME}-exit-active {
        height: 0;
    }
`;

export interface IHeightProps {
    /** Duration in seconds */
    duration: number;
    children: React.ReactNode;
}

/**
 * Animates the children's height without requiring an explicit height to be set
 */
@observer
export class Height extends React.Component<IHeightProps> {
    private contentRef: HTMLDivElement;
    @observable
    private contentHeight: number | undefined;

    render() {
        return (
            <HeightRoot computedHeight={this.contentHeight} duration={this.props.duration}>
                <TransitionGroup>
                    {this.props.children && <CSSTransition
                        key={status}
                        timeout={this.props.duration * 1000}
                        classNames={CLASS_NAME}
                        unmountOnExit
                    >
                    {/* CSSTransition applies className on the inner div, so we add another extra layer */}
                        <div>
                            <div ref={this.handleRef} style={{overflowY: "visible", height: "auto"}}>
                                {this.props.children}
                            </div>
                        </div>
                    </CSSTransition>
                    }
                </TransitionGroup>
            </HeightRoot>
        );
    }

    componentDidUpdate(prevProps: IHeightProps) {
        if (this.props.children !== prevProps.children) {
            this.updateHeight();
        }
    }

    private updateHeight() {
        this.contentHeight = this.contentRef.offsetHeight;
    }

    private handleRef = (ref: HTMLDivElement | null) => {
        if (ref) {
            this.contentRef = ref;
            this.updateHeight();
        }
    }
}
