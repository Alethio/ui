import * as React from "react";
import { AlethioIcon } from "../../icon/AlethioIcon";
import { HoverState } from "../../util/react/HoverState";
import { IconButton } from "../../control/IconButton";

export interface IAlethioIconButtonProps {
}

export class AlethioIconButton extends React.Component<IAlethioIconButtonProps> {
    render() {
        return (
            <HoverState>
                {(hover) =>
                    <IconButton Icon={AlethioIcon} color={
                        theme => hover ? theme.colors.toolbarAlethioIconHover : theme.colors.toolbarAlethioIcon
                    } />
                }
            </HoverState>
        );
    }
}
