import * as React from "react";
import * as ReactDOM from "react-dom";
import { Manager, Reference, Popper, PopperArrowProps } from "react-popper";
import { observer } from "mobx-react";
import { ReferenceObject, Placement } from "popper.js";
import { DomNodeProxy } from "../util/react/DomNodeProxy";

export interface IPopoverProps {
    visible: boolean;
    content: React.ReactNode | ((placement: Placement, arrowProps: PopperArrowProps) => React.ReactNode);
    /** Prevent "flipping" the position when the popover would be out of the viewport */
    noFlip?: boolean;
    placement?: Placement;
    /** Distance from reference element */
    offset?: number;
    /** Distance on other axis */
    alignmentOffset?: number;
    /** Styles that will be applied to the popover wrapper element */
    style?: React.CSSProperties;
    children: React.ReactElement<{}>;
    /** Callback that returns the reference element */
    referenceElement?: (() => HTMLElement) | ReferenceObject;
}

@observer
export class Popover extends React.Component<IPopoverProps> {
    static defaultProps: Pick<IPopoverProps, "placement" | "offset"> = {
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
                                    ...this.props.style
                                }} data-placement={placement}
                            >
                                {typeof this.props.content === "function" ?
                                    this.props.content(placement, arrowProps) : this.props.content}
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
