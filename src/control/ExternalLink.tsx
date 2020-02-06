import React, { AnchorHTMLAttributes } from "react";
import styled from "../styled-components";

const ExternalLinkRoot = styled.a`
    text-decoration: none;
    outline: none;

    color: ${props => props.theme.colors.link};
`;

interface IExternalLinkProps {
}

export class ExternalLink extends React.Component<AnchorHTMLAttributes<HTMLAnchorElement> & IExternalLinkProps> {
    render() {
        return <ExternalLinkRoot target={this.props.target || "_blank"} rel="noopener noreferrer" {...this.props}>
            {this.props.children}
        </ExternalLinkRoot>;
    }
}
