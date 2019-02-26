import * as React from "react";
import { DomNodeProxy } from "./DomNodeProxy";

export interface IScrollIntoViewProps {
    children: React.ReactElement<{}> | undefined;
    /** Delay in seconds */
    delay?: number;
}

export class ScrollIntoView extends React.Component<IScrollIntoViewProps> {
    private ref: HTMLElement | undefined;
    private scrollTimeoutId: number | undefined;

    componentDidMount() {
        this.scrollTimeoutId = setTimeout(() => {
            this.ref!.scrollIntoView({
                behavior: "smooth"
            });
        }, (this.props.delay || 0) * 1000);
    }

    componentWillUnmount() {
        if (this.scrollTimeoutId) {
            clearTimeout(this.scrollTimeoutId);
            this.scrollTimeoutId = void 0;
        }
    }

    render() {
        return ( this.props.children ?
            <DomNodeProxy
                onMount={ref => this.ref = ref}
                onUnmount={() => this.ref = void 0}
            >{this.props.children}</DomNodeProxy>
         : null );
    }
}
