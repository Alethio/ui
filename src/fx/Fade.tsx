import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "../styled-components";
import { observable } from "mobx";
import { observer } from "mobx-react";

const CLASS_NAME = "fade";

const FadeRoot = styled<Pick<IFadeProps, "duration">, "div">("div")`
    & .${CLASS_NAME}-enter,
    & .${CLASS_NAME}-exit {
        transition: opacity ${props => props.duration}s ease-in-out;
    }

    & .${CLASS_NAME}-enter {
        opacity: 0;
    }

    & .${CLASS_NAME}-enter-active {
        opacity: 1;
    }

    & .${CLASS_NAME}-exit {
        opacity: 1;
    }

    & .${CLASS_NAME}-exit-active {
        opacity: 0;
    }
`;

export interface IFadeProps {
    /** Duration in seconds */
    duration?: number;
    /** Delay in seconds */
    delay?: number;
    /** Enable the animation initially? Use this together with delay to trigger the animation later (default = true) */
    enabled?: boolean;
    /** Controls the direction of the animation - fade in or out (default = true) */
    in?: boolean;
    innerRef?(ref: HTMLDivElement): any;
    onFinished?(): void;
}

/**
 * Fade in/out effect
 *
 * Wrapper over React CSStransition. By default, fades in on mount.
 * To fade out on unmount, make sure not to unmount the parent component before the animation finishes
 */
@observer
export class Fade extends React.Component<IFadeProps> {
    static defaultProps: IFadeProps = {
        duration: .2,
        delay: 0,
        in: true,
        enabled: true
    };

    @observable
    private active = false;
    private delayTimer: number | undefined;

    componentDidMount() {
        if (this.props.enabled === true) {
            this.delayTimer = setTimeout(() => this.active = true, this.props.delay! * 1000);
        }
    }

    componentDidUpdate(prevProps: IFadeProps) {
        if (prevProps.enabled !== this.props.enabled) {
            if (this.delayTimer) {
                clearTimeout(this.delayTimer);
            }
            this.delayTimer = setTimeout(() => {
                this.active = (this.props.enabled === true);
            }, this.props.delay! * 1000);
        }
    }

    componentWillUnmount() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
        }
    }

    render() {
        return (
            <FadeRoot duration={this.props.duration} innerRef={this.props.innerRef}>
                <CSSTransition
                    in={this.active && this.props.in}
                    classNames={CLASS_NAME}
                    timeout={this.props.duration! * 1000}
                    onExited={this.props.onFinished}
                    unmountOnExit
                >
                    <div>{this.props.children}</div>
                </CSSTransition>
            </FadeRoot>
        );
    }
}
