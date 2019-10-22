import * as React from "react";
import styled from "../../styled-components";

const $Menu = styled.div`
    box-shadow: 0 8px 16px 0 rgba(167, 181, 209, 0.6);
    border-radius: 8px;
    padding: 8px 0;
    max-height: 300px;
    overflow-y: auto;
    background: ${props => props.theme.colors.menu.background};
    cursor: default;
`;

export interface IMenuProps {

}

export class Menu extends React.Component<IMenuProps> {
    render() {
        return (
            <$Menu>{this.props.children}</$Menu>
        );
    }
}
