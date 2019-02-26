import * as React from "react";

// tslint:disable:max-line-length
let wrapSvgContent = (svgContent: string, size: number, viewBoxSize: number) => `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}px" height="${size}px" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        ${svgContent}
    </g>
</svg>
`;
// tslint:enable:max-line-length

export interface ISvgIconEncodedProps {
    size?: number;
    viewBoxSize?: number;
    children: string;
}

/**
 * Use this class when the svg can't be safely inlined (mask ids that don't work properly in safari / firefox on mac )
 */
export class SvgIconEncoded extends React.Component<ISvgIconEncodedProps> {
    static defaultProps = {
        size: 24,
        viewBoxSize: 24
    };

    render() {
        return (
            <img src={"data:image/svg+xml," +
                encodeURIComponent(
                    wrapSvgContent(this.props.children, this.props.size!, this.props.viewBoxSize!)
                        .replace(/\r?\n/g, "")
                )
                    .replace(/'/g, "%27")
                    .replace(/"/g, "%22")}
            />
        );
    }
}
