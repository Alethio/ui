import * as React from "react";
import styled, { withTheme } from "../../styled-components";
import { VerticalBar } from "../VerticalBar";
import { ITheme } from "../../theme/ITheme";

export const TOOLBAR_WIDTH = 72;

const StyledVerticalBar = styled(VerticalBar)`
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
`;

interface IToolbarProps {
    zIndex?: number;
    theme: ITheme;
}

export class $Toolbar extends React.Component<IToolbarProps> {
    render() {
        return (
            <StyledVerticalBar {...this.props} sticky width={this.props.theme.spacing.toolbarWidth} />
        );
    }
}

export const Toolbar = withTheme($Toolbar);
