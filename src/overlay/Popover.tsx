import * as React from "react";
import * as ReactDOM from "react-dom";
import { Manager, Reference, Popper } from "react-popper";
import { observer } from "mobx-react";
import { ReferenceObject, Placement } from "popper.js";
import { DomNodeProxy } from "../util/react/DomNodeProxy";
import styled, { css } from "../styled-components";

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

export interface IPopoverProps {
    visible: boolean;
    content: React.ReactNode;
    /** Don't render the arrow which points back to the referenceElement */
    noArrow?: boolean;
    /** Prevent "flipping" the position when the popover would be out of the viewport */
    noFlip?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    placement?: Placement;
    /** Distance from reference element */
    offset?: number;
    /** Distance on other axis */
    alignmentOffset?: number;
    /** Ignores mouse events and makes the popover click-through */
    nonInteractive?: boolean;
    /** Styles that will be applied to the popover wrapper element */
    style?: React.CSSProperties;
    children: React.ReactElement<{}>;
    /** Callback that returns the reference element */
    referenceElement?: (() => HTMLElement) | ReferenceObject;
}

@observer
export class Popover extends React.Component<IPopoverProps> {
    static defaultProps: Pick<IPopoverProps, "backgroundColor" | "placement" | "offset"> = {
        backgroundColor: "#fff",
        placement: "top",
        offset: 0
    };

    render() {
        return (
            <Manager>
                <Reference>
                    {({ref}) => <DomNodeProxy onMount={el => ref(el as any)} onUnmount={el => ref(null)}>
                        {this.props.children}
                    </DomNodeProxy>}
                </Reference>
                {this.props.visible ?
                ReactDOM.createPortal(
                    <Popper placement={this.props.placement} modifiers={{
                        offset: {
                            offset: `${this.props.alignmentOffset + "px" || 0}, ${this.props.offset}px`
                        },
                        ...(
                            this.props.noFlip ? { flip: { enabled: false }} : {}
                        )
                    }} {...(this.props.referenceElement ? {referenceElement: this.createReferenceObject()} : {})}>
                        {({ref, style, placement, arrowProps}) => (
                            <div ref={ref}
                                // Prevent click events from propagating up the portal to the parent component
                                // See https://github.com/facebook/react/issues/11387
                                onClick={e => e.stopPropagation()}
                                style={{
                                    ...style,
                                    background: this.props.backgroundColor,
                                    boxShadow: "0 2px 6px 0 rgba(0, 0, 0, .08)",
                                    border: this.props.borderColor ? "1px solid " + this.props.borderColor : void 0,
                                    boxSizing: "border-box",
                                    pointerEvents: this.props.nonInteractive ? "none" : void 0,
                                    ...this.props.style
                                }} data-placement={placement}
                            >
                                {this.props.content}
                                {!this.props.noArrow ?
                                <Arrow
                                    placement={placement}
                                    backgroundColor={this.props.backgroundColor!}
                                    borderColor={this.props.borderColor}
                                    innerRef={arrowProps.ref} style={arrowProps.style}
                                />
                                : null }
                            </div>
                        )}
                    </Popper>,
                    document.body
                )
                : null }
            </Manager>
        );
    }

    private createReferenceObject(): ReferenceObject {
        let referenceEl = this.props.referenceElement!;
        if (typeof referenceEl !== "function") {
            return referenceEl;
        }

        const getWrapperEl = referenceEl as () => HTMLElement;

        return {
            getBoundingClientRect() {
                return getWrapperEl() ? getWrapperEl().getBoundingClientRect() :
                    {bottom: 0, left: 0, right: 0, top: 0, height: 0, width: 0};
            },
            get clientWidth() {
                return getWrapperEl() ? getWrapperEl().clientWidth : 0;
            },
            get clientHeight() {
                return getWrapperEl() ? getWrapperEl().clientHeight : 0;
            }
        };
    }
}
