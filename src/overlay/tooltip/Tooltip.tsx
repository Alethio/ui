import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { IPopoverProps, Popover } from "../Popover";
import { DomNodeProxy } from "../../util/react/DomNodeProxy";
import { MultiHover } from "../../util/react/MultiHover";
import { Placement } from "popper.js";
import styled, { css } from "../../styled-components";

const getArrowStyle = (placement: Placement | undefined, arrowSize: number, arrowColor: string) => {
    let neutralBorder = arrowSize + "px solid transparent";
    let colorBorder = arrowSize + "px solid " + arrowColor;

    if (!placement) {
        return ``;
    }

    if (placement.startsWith("top")) {
        return css`
            transform: translateX(-50%);
            border-left: ${neutralBorder};
            border-right: ${neutralBorder};
            border-top: ${colorBorder};
        `;
    } else if (placement.startsWith("bottom")) {
        return css`
            transform: translateX(-50%);
            top: -${arrowSize}px;
            border-left: ${neutralBorder};
            border-right: ${neutralBorder};
            border-bottom: ${colorBorder};
        `;
    } else if (placement.startsWith("left")) {
        return css`
            transform: translateY(-50%);
            right: -${arrowSize}px;
            border-top: ${neutralBorder};
            border-left: ${colorBorder};
            border-bottom: ${neutralBorder};
        `;
    } else if (placement.startsWith("right")) {
        return css`
            transform: translateY(-50%);
            left: -${arrowSize}px;
            border-top: ${neutralBorder};
            border-right: ${colorBorder};
            border-bottom: ${neutralBorder};
        `;
    } else {
        return ``;
    }
};

const getArrowPosition = (placement: Placement | undefined) => {
    if (!placement) {
        return ``;
    }

    if (placement.startsWith("bottom")) {
        return css`
            top: 0;
        `;
    } else if (placement.startsWith("left")) {
        return css`
            right: 0;
        `;
    } else {
        return ``;
    }
};

interface IArrowProps {
    placement?: Placement;
    backgroundColor: string;
    borderColor?: string;
}

const Arrow = styled<IArrowProps, "div">("div")`
    position: absolute;
    ${props => getArrowPosition(props.placement)}

    &:before, &:after {
        content: "";
        position: absolute;
    }
    &:before {
        ${props => props.borderColor ? getArrowStyle(props.placement, 6, props.borderColor) : ``}
    }
    &:after {
        ${props => getArrowStyle(props.placement, 5, props.backgroundColor)}
    }
`;

export interface ITooltipProps extends Omit<IPopoverProps, "visible"> {
    /** Time since mouse enter event until tooltip is shown (millis) */
    showDelay?: number;
    /** Time since mouse leave event until tooltip is hidden (millis) */
    hideDelay?: number;
    /** Don't render the arrow which points back to the referenceElement */
    noArrow?: boolean;
    /** Ignores mouse events and makes the popover click-through */
    nonInteractive?: boolean;
    backgroundColor?: string;
    borderColor?: string;
}

/**
 * Tooltip component primitive, without specific styling
 */
@observer
export class Tooltip extends React.Component<ITooltipProps> {
    static defaultProps: Pick<ITooltipProps, "showDelay" | "hideDelay" | "backgroundColor"> = {
        showDelay: 400,
        hideDelay: 400,
        backgroundColor: "#fff"
    };

    @observable
    private visible = false;
    private multiHover: MultiHover<true>;

    constructor(props: ITooltipProps) {
        super(props);

        this.multiHover = new MultiHover<true>({ enterDelay: this.props.showDelay, leaveDelay: this.props.hideDelay });
        this.multiHover.onActiveChange.subscribe(visible => this.visible = visible || false);
    }

    componentDidUpdate(prevProps: ITooltipProps) {
        if (this.props.showDelay !== prevProps.showDelay) {
            this.multiHover.applyOpts({ enterDelay: this.props.showDelay});
        }
        if (this.props.hideDelay !== prevProps.hideDelay) {
            this.multiHover.applyOpts({ leaveDelay: this.props.hideDelay});
        }
    }

    render() {
        let { showDelay: _unused, hideDelay: _unused2, content, ...otherProps } = this.props;

        let target = React.Children.only(this.props.children);

        return (
            <Popover
                visible={this.visible}
                content={(placement, arrowProps) =>
                    <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        {content}
                        {!this.props.noArrow ?
                        <Arrow
                            placement={placement}
                            backgroundColor={this.props.backgroundColor!}
                            borderColor={this.props.borderColor}
                            innerRef={arrowProps.ref} style={arrowProps.style}
                        />
                        : null }
                    </div>
                }
                style={{
                    background: this.props.backgroundColor,
                    boxShadow: "0 2px 6px 0 rgba(0, 0, 0, .08)",
                    border: this.props.borderColor ? "1px solid " + this.props.borderColor : void 0,
                    boxSizing: "border-box",
                    pointerEvents: this.props.nonInteractive ? "none" : void 0
                }}
                {...otherProps}
            >
                <DomNodeProxy
                    onMount={el => {
                        el.addEventListener("mouseenter", this.handleMouseEnter);
                        el.addEventListener("mouseleave", this.handleMouseLeave);
                    }}
                    onUnmount={el => {
                        el.removeEventListener("mouseenter", this.handleMouseEnter);
                        el.removeEventListener("mouseleave", this.handleMouseLeave);
                    }}
                >
                    { target }
                </DomNodeProxy>
            </Popover>
        );
    }

    private handleMouseEnter = () => {
        this.multiHover.enter(true);
    }

    private handleMouseLeave = () => {
        this.multiHover.leave();
    }
}
