import * as React from "react";
import styled from "../styled-components";

let uniqueId = 0;

const SpinnerRoot = styled.div`

    @keyframes spinner {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    & svg {
        display: block;
        animation: spinner 1.4s infinite linear;
        transform-origin: center;
    }
`;

export interface ISpinnerProps {
    size?: number;
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    className?: string;
}

export class Spinner extends React.Component<ISpinnerProps> {
    static defaultProps: Partial<ISpinnerProps> = {
        size: 24,
        color: "currentColor",
        borderColor: "#000",
        backgroundColor: "transparent"
    };

    private uniqueId = "spinner-" + uniqueId++;

    render() {
        let size = this.props.size!;
        let color = this.props.color!;
        let borderColor = this.props.borderColor!;
        let backgroundColor = this.props.backgroundColor!;
        let baseId = this.uniqueId;

        return (
            <SpinnerRoot className={this.props.className}>
                <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="1" y1="0.5" x2="0.5" y2="1.2" id={`${baseId}_br`}>
                            <stop stopColor={color} stopOpacity="0.4" offset="0%"/>
                            <stop stopColor={color} stopOpacity="1" offset="100%"/>
                        </linearGradient>
                        <linearGradient x1="0.5" y1="0" x2="1.1" y2="1" id={`${baseId}_tr`}>
                            <stop stopColor={color} stopOpacity="0.1" offset="0%"/>
                            <stop stopColor={color} stopOpacity="0.4" offset="100%"/>
                        </linearGradient>
                        <linearGradient x1="0" y1="0.5" x2="0.5" y2="0" id={`${baseId}_tl`}>
                            <stop stopColor={color} stopOpacity="0" offset="0%"/>
                            <stop stopColor={color} stopOpacity="0.1" offset="100%"/>
                        </linearGradient>
                    </defs>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <circle stroke={borderColor} fill={backgroundColor}
                            cx="12" cy="12" r="11.5"></circle>
                        <path d="M12,18 12,18" stroke={color}
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12,18 C15.3137085,18 18,15.3137085 18,12" stroke={`url(#${baseId}_br)`}
                            strokeWidth="2"></path>
                        <path d="M18,12 C18,8.6862915 15.3137085,6 12,6" stroke={`url(#${baseId}_tr)`}
                            strokeWidth="2"></path>
                        <path d="M12,6 C8.6862915,6 6,8.6862915 6,12" stroke={`url(#${baseId}_tl)`}
                            strokeWidth="2"></path>
                    </g>
                </svg>
            </SpinnerRoot>
        );
    }
}
