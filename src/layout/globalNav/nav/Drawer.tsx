import React from "react";
import styled from "../../../styled-components";

const DrawerWrapper = styled<IDrawerProps, "div">("div")`
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: calc(100vw - 50px);
    max-width: 320px;
    transition: transform ease-in-out 0.1s;
    transform: translate(0px, ${({open}) => open ? "0px" : "200vh"});
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
