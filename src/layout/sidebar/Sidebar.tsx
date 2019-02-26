import * as React from "react";
import styled, { withTheme } from "../../styled-components";
import { VerticalBar } from "../VerticalBar";
import { ITheme } from "../../theme/ITheme";

const StyledVerticalBar = styled(VerticalBar)`
    padding-top: 38px;
    padding-bottom: 80px;
`;

interface ISidebarProps {
    sticky?: boolean;
    zIndex?: number;
    theme: ITheme;
    mobileVisible?: boolean;
    contentRef?(instance: HTMLDivElement): void;
}

class $Sidebar extends React.Component<ISidebarProps> {
    static defaultProps = {
        zIndex: 1
    };

    render() {
        return <StyledVerticalBar width={this.props.theme.spacing.sidebarWidth} {...this.props} />;
    }
}

export const Sidebar = withTheme($Sidebar);
