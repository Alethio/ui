import * as React from "react";
import { HoverState } from "../../util/react/HoverState";
import { IconButton, IIconButtonProps } from "../../control/IconButton";

export interface IProductIconButtonProps {
    Icon: IIconButtonProps["Icon"];
}

export class ProductIconButton extends React.Component<IProductIconButtonProps> {
    render() {
        return (
            <HoverState>
                {(hover) =>
                    <IconButton Icon={this.props.Icon} color={
                        hover ? void 0 : theme => theme.colors.toolbarIcon
                    } iconSize={24} />
                }
            </HoverState>
        );
    }
}
