import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "../styled-components";
import { observable } from "mobx";
import { observer } from "mobx-react";

const CLASS_NAME = "fade";

const FadeRoot = styled<IFadeProps, "div">("div")`
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
    duration: number;
    /** Delay in seconds */
    delay?: number;
    /** Initial active state */
    active?: boolean;
}

/**
 * Fade-in effect
 *
 * Activated when children are added/mounted
 */
@observer
export class Fade extends React.Component<IFadeProps> {
    static defaultProps = {
        delay: 0
    };

    @observable
    private active = false;
    private delayTimer: number | undefined;

    componentDidMount() {
        if (this.props.active === true || this.props.active === void 0) {
            this.delayTimer = setTimeout(() => this.active = true, this.props.delay! * 1000);
        }
    }

    componentDidUpdate(prevProps: IFadeProps) {
        if (prevProps.active !== this.props.active) {
            this.delayTimer = setTimeout(() => {
                this.active = (this.props.active === true || this.props.active === void 0);
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
            <FadeRoot {...this.props}>
                <CSSTransition
                    in={this.active}
                    classNames={CLASS_NAME}
                    timeout={this.props.duration * 1000}
                    unmountOnExit
                >
                    <div>{this.props.children}</div>
                </CSSTransition>
            </FadeRoot>
        );
    }
}
