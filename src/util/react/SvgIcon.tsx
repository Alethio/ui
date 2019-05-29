import * as React from "react";

export interface ISvgIconProps {
    size?: number;
    viewBoxSize?: number;
}

export class SvgIcon extends React.Component<ISvgIconProps> {
    static defaultProps = {
        size: 24,
        viewBoxSize: 24
    };

    render() {
        let size = this.props.size!;
        let viewBoxSize = this.props.viewBoxSize!;

        return (
            <svg width={size + "px"} height={size + "px"} style={{ display: "block" }}
                viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
                {this.props.children}
            </svg>
        );
    }
}
