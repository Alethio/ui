import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

export interface IDelayedRenderProps {
    /** Delay in seconds */
    delay: number;
}

@observer
export class DelayedRender extends React.Component<IDelayedRenderProps> {
    @observable
    private visible = false;
    private renderTimer: number | undefined;

    componentDidMount() {
        this.renderTimer = setTimeout(() => {
            this.visible = true;
        }, this.props.delay * 1000);
    }

    componentWillUnmount() {
        if (this.renderTimer) {
            clearTimeout(this.renderTimer);
            this.renderTimer = void 0;
        }
    }

    render() {
        return this.visible ? this.props.children : null;
    }
}
