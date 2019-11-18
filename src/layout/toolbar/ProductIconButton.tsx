import * as React from "react";
import { HoverState } from "../../util/react/HoverState";
import { IconButton, IIconButtonProps } from "../../control/IconButton";

export interface IProductIconButtonProps {
    Icon: IIconButtonProps["Icon"];
}

/**
 * Variation of the ToolbarIconButton component that works with multi-color SvgIcon components.
 * The Icon passed as prop must act neutrally when being passed an undefined value as color
 */
export class ProductIconButton extends React.Component<IProductIconButtonProps> {
    render() {
        return (
            <HoverState>
                {(hover) =>
                    <IconButton Icon={this.props.Icon} color={
                        hover ? void 0 : theme => theme.colors.toolbar.icon.normal
                    } iconSize={24} />
                }
            </HoverState>
        );
    }
}
