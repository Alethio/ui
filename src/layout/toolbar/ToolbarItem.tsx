import * as React from "react";
import styled from "../../styled-components";
import { TooltipRegular } from "../../overlay/tooltip/TooltipRegular";

interface IToolbarItemRootProps {
    backgroundColor?: string;
}

const ToolbarItemRoot = styled<IToolbarItemRootProps, "div">("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    /* HACK: Subtract toolbar border */
    width: ${({theme}) => theme.spacing.toolbarWidth - 1}px;
    height: ${({theme}) => theme.spacing.toolbarWidth}px;
    background-color: ${props => props.backgroundColor};
`;

export interface IToolbarItemProps {
    title?: string;
    className?: string;
    backgroundColor?: string;
    children: React.ReactElement<{}>;
}

export class ToolbarItem extends React.Component<IToolbarItemProps> {
    private rootEl: HTMLElement;

    render() {
        let { className, backgroundColor } = this.props;

        return (
            <ToolbarItemRoot
                className={className}
                backgroundColor={backgroundColor}
                innerRef={ref => this.rootEl = ref!}
            >
                { this.props.title ?
                    <TooltipRegular
                        content={this.props.title} placement="right" referenceElement={() => this.rootEl} nonInteractive
                    >
                        {this.props.children}
                    </TooltipRegular>
                    :
                    this.props.children
                }
            </ToolbarItemRoot>
        );
    }
}
