import * as React from "react";
import styled, { withTheme } from "../../styled-components";
import { HorizontalBar } from "../../layout/HorizontalBar";
import { ITheme } from "../../theme/ITheme";

const StyledHorizontalBar = styled(HorizontalBar)`
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
`;

interface ITopbarProps {
    zIndex?: number;
    theme: ITheme;
}

export class $TopBar extends React.Component<ITopbarProps> {
    render() {
        return (
            <StyledHorizontalBar {...this.props} sticky height={this.props.theme.spacing.topbarHeight} />
        );
    }
}

export const TopBar = withTheme($TopBar);
