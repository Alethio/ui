import * as React from "react";

const DEFAULT_THRESHOLD = 5;

export interface IClickThresholdProps {
    threshold?: number;
    onClick(): void;
}

/**
 * Component that allows clicks within a given threshold.
 *
 * React click events trigger even if the mouse was moved significantly between mouse down and mouse up events
 * (e.g. dragging or text selection)
 */
export class ClickThreshold extends React.Component<IClickThresholdProps> {
    static defaultProps: Partial<IClickThresholdProps> = {
        threshold: DEFAULT_THRESHOLD
    };

    private mouseDownCoords: {x: number; y: number};

    private get threshold() {
        return this.props.threshold!;
    }

    render() {
        return (
            <div onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}>
                {this.props.children}
            </div>
        );
    }

    private onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        this.mouseDownCoords = {
            x: e.clientX,
            y: e.clientY
        };
    }

    private onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if (Math.abs(e.clientX - this.mouseDownCoords.x) <= this.threshold &&
            Math.abs(e.clientY - this.mouseDownCoords.y) <= this.threshold
        ) {
            this.props.onClick();
        }
    }
}
