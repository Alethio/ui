import * as React from "react";
import { IIconButtonProps, IconButton } from "../../control/IconButton";
import { HoverState } from "../../util/react/HoverState";

export interface IToolbarIconButtonProps {
    Icon: IIconButtonProps["Icon"];
    iconSize?: number;
    onClick?(): void;
}

export class ToolbarIconButton extends React.Component<IToolbarIconButtonProps> {
    render() {
        return (
            <HoverState>
                {(hover) =>
                    <IconButton {...this.props} color={
                        theme => hover ? theme.colors.toolbarIconHover : theme.colors.toolbarIcon } />
                }
            </HoverState>
        );
    }
}
