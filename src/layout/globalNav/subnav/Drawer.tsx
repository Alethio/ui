import React from "react";
import styled from "../../../styled-components";

const DrawerWrapper = styled<IDrawerProps, "div">("div")`
    background-color: white;
    position: absolute;
    top: 64px;
    left: 0;
    bottom: 0;
    right: 50px;
    z-index: 1;
    max-width: 320px;
    transition: transform ease 0.5s;
    transform: translate(${({open}) => open ? "0px" : "-100%"}, 0px);
`;

interface IDrawerProps {
    open: boolean;
}

/** @internal */
export class Drawer extends React.Component<IDrawerProps> {
    render() {
        return <DrawerWrapper open={this.props.open}>
            { this.props.children}
        </DrawerWrapper>;
    }
}
