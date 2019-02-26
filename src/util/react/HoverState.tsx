import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { DomNodeProxy } from "./DomNodeProxy";

interface IHoverStateProps {
    children(hover: boolean): React.ReactElement<{}>;
}

@observer
export class HoverState extends React.Component<IHoverStateProps> {
    @observable
    private isHovered = false;

    render() {
        return <DomNodeProxy
            onMount={this.handleMount}
            onUnmount={this.handleUnmount}
        >{this.props.children(this.isHovered)}</DomNodeProxy>;
    }

    private handleMount = (ref: HTMLElement) => {
        ref.addEventListener("mouseenter", this.onMouseEnter);
        ref.addEventListener("mouseleave", this.onMouseLeave);
    }

    private handleUnmount = (ref: HTMLElement) => {
        ref.removeEventListener("mouseenter", this.onMouseEnter);
        ref.removeEventListener("mouseleave", this.onMouseLeave);
    }

    private onMouseEnter = () => {
        this.isHovered = true;
    }

    private onMouseLeave = () => {
        this.isHovered = false;
    }
}
