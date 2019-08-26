import React, { AnchorHTMLAttributes } from "react";
import styled from "../styled-components";

const ExternalLinkRoot = styled.a`
    text-decoration: none;
    outline: none;

    color: ${props => props.theme.colors.link};
`;

interface IExternalLinkProps {
    newTab?: boolean;
}

export class ExternalLink extends React.Component<AnchorHTMLAttributes<HTMLAnchorElement> & IExternalLinkProps> {
    render() {
        return <ExternalLinkRoot target={
            this.props.newTab === void 0 || this.props.newTab === true ? "_blank" : "_self"
        } {...this.props}>
            {this.props.children}
        </ExternalLinkRoot>;
    }
}
