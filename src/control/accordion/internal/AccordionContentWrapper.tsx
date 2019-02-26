import * as React from "react";
import { AccordionItemContentStatus } from "../AccordionItemContentStatus";
import { AccordionContentFrame } from "../AccordionContentFrame";
import { Fade } from "../../../fx/Fade";
import { SpinnerRegular } from "../../../fx/SpinnerRegular";
import { ValueBox } from "../../../layout/content/box/ValueBox";
import { ErrorIcon } from "../../../icon/ErrorIcon";
import { IAccordionItemConfig } from "../IAccordionItemConfig";

/** @internal */
export interface IAccordionContentWrapperProps<TItemConfig extends IAccordionItemConfig> {
    status: AccordionItemContentStatus;
    content: React.ReactElement<{}> | undefined;
    config: TItemConfig;
    /**
     * Delay showing the spinner until the content animation is done
     * This prevents flickering/clipping the spinner
     */
    loadingDelay: number | undefined;
    loadingText: string;
    errorText: string;
    arrowPosition: number | undefined;
    renderContent?(args: {
        content?: React.ReactElement<{}>;
        status: AccordionItemContentStatus;
        arrowPosition?: number;
        config: TItemConfig;
    }): React.ReactElement<{}>;
}

/** @internal */
export class AccordionContentWrapper<TItemConfig extends IAccordionItemConfig>
extends React.Component<IAccordionContentWrapperProps<TItemConfig>> {
    render() {
        let { status, content, config, arrowPosition, loadingDelay, loadingText, errorText } = this.props;

        let contentEl: React.ReactElement<{}> | undefined;
        if (status === AccordionItemContentStatus.Loaded) {
            if (!this.props.renderContent) {
                contentEl = <AccordionContentFrame arrowPosition={arrowPosition}>
                    {content}
                </AccordionContentFrame>;
            } else {
                contentEl = content;
            }
        } else if (status === AccordionItemContentStatus.NotLoaded) {
            contentEl = <Fade duration={.2} delay={loadingDelay}>
                <div style={{ display: "flex" }}>
                    <SpinnerRegular />
                    <ValueBox>{loadingText}</ValueBox>
                </div>
            </Fade>;
        } else {
            contentEl = <>
                <div style={{ display: "flex" }}>
                    <ErrorIcon />
                    <ValueBox colors="error">{errorText}</ValueBox>
                </div>
            </>;
        }

        return this.props.renderContent ?
            this.props.renderContent({content: contentEl, status, arrowPosition, config}) :
            contentEl;
    }
}
