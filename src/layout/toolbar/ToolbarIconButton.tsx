import * as React from "react";
import { IIconButtonProps, IconButton } from "../../control/IconButton";
import { HoverState } from "../../util/react/HoverState";

export interface IToolbarIconButtonProps {
    Icon: IIconButtonProps["Icon"];
    iconSize?: number;
    /** Toggle button behavior */
    active?: boolean;
    onClick?(): void;
}

export class ToolbarIconButton extends React.Component<IToolbarIconButtonProps> {
    render() {
        let { active, ...otherProps } = this.props;

        return (
            <HoverState>
                {(hover) =>
                    <IconButton {...otherProps} color={
                        theme => hover ?
                            (active ? theme.colors.toolbar.icon.activeHover : theme.colors.toolbar.icon.hover) :
                            (active ? theme.colors.toolbar.icon.active : theme.colors.toolbar.icon.normal)
                    } />
                }
            </HoverState>
        );
    }
}
