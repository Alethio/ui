import * as React from "react";

const BORDER_SIZE = 2;

interface IBubbleWrapperProps {
    innerSize: number;
    padding: number;
    className?: string;
}
const getWrapperStyle = (props: IBubbleWrapperProps) => ({
    width: props.innerSize,
    height: props.innerSize,
    padding: props.padding
});

interface IBubbleInnerProps {
    innerSize: number;
    size: number;
    highlightThreshold?: number;
    highlightColor?: string;
    backgroundColor?: string;
    highlightBorderColor?: string;
    borderColor?: string;
    className?: string;
}
const getInnerStyle = (props: IBubbleInnerProps): React.CSSProperties => ({
    width: props.innerSize,
    height: props.innerSize,
    borderRadius: "100%",
    boxSizing: "border-box",
    backgroundColor: (() => {
        const highlightThreshold = props.highlightThreshold;
        if (highlightThreshold !== void 0 && props.highlightColor && props.size > highlightThreshold) {
            return props.highlightColor;
        }
        if (props.backgroundColor) {
            return props.backgroundColor;
        }
        return "#000000";
    })(),
    border: `${BORDER_SIZE}px solid ${(() => {
        const highlightThreshold = props.highlightThreshold;
        if (highlightThreshold !== void 0 && props.highlightColor && props.size > highlightThreshold) {
            return props.highlightColor;
        }
        if (props.backgroundColor) {
            return props.backgroundColor;
        }
        return "#000000";
    })()}`
});

const getInnerHoverStyle = (props: IBubbleInnerProps) => ({
    backgroundColor: "transparent",
    border: `${BORDER_SIZE}px solid ${(() => {
        const highlightThreshold = props.highlightThreshold;
        if (highlightThreshold !== void 0 && props.highlightBorderColor && props.size > highlightThreshold) {
            return props.highlightBorderColor;
        }
        if (props.borderColor) {
            return props.borderColor;
        }
        if (highlightThreshold !== void 0 && props.highlightColor && props.size > highlightThreshold) {
            return props.highlightColor;
        }
        if (props.backgroundColor) {
            return props.backgroundColor;
        }
        return "#000000";
    })()}`
});

interface IBubbleProps {
    size: number;
    wrapperSize: number;
    highlightThreshold?: number;
    highlightColor?: string;
    backgroundColor?: string;
    highlightBorderColor?: string;
    borderColor?: string;
}

export class Bubble extends React.Component<IBubbleProps, { hover: boolean; }> {
    constructor(props: IBubbleProps) {
        super(props);

        this.state = {
            hover: false
        };
    }
    render() {
        let { size } = this.props;
        if (size < 0) { size = 0; }
        if (size > 100) { size = 100; }
        let maxBubbleSize = this.props.wrapperSize - 2;
        let innerSize = Math.round( (maxBubbleSize - BORDER_SIZE * 2) * this.props.size / 100 + BORDER_SIZE * 2);
        if (innerSize % 2 !== 0) {
            innerSize += 1;
        }
        let { children: _unused, wrapperSize, ...otherProps} = this.props;

        const padding = (wrapperSize - innerSize) / 2;

        return (
            <div style={getWrapperStyle({innerSize, padding})}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div style={{
                    ...getInnerStyle({ innerSize, ...otherProps}),
                    ...(this.state.hover ? getInnerHoverStyle({ innerSize, ...otherProps}) : {})
                }} />
            </div>
        );
    }

    private handleMouseEnter = () => {
        this.setState({ hover: true });
    }

    private handleMouseLeave = () => {
        this.setState({ hover: false });
    }
}
