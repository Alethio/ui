import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";
import styled from "../../../styled-components";
import { HamburgerIcon } from "../../../icon/HamburgerIcon";
import { Fade } from "../../../fx/Fade";
import { Drawer } from "./Drawer";

const Mask = styled.div`
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
`;

interface ISubNavProps {
    content?: React.ReactNode;
    handler?(): void;
}

@observer
export class SubNav extends React.Component<ISubNavProps> {
    @observable
    layerOpen = false;

    render() {
        return (<>
            <div onClick={() => {
                if (this.props.content) {
                    this.layerOpen = !this.layerOpen;
                }
                if (this.props.handler) {
                    this.props.handler();
                }
            }} style={{padding: "22px 16px", cursor: "pointer"}}>
                <HamburgerIcon size={20} />
            </div>
            { this.props.content ? ReactDOM.createPortal(<>
                <Fade duration={.2} active={this.layerOpen}>
                    <Mask onClick={() => { this.layerOpen = false; }} />
                </Fade>
                <Drawer open={this.layerOpen}>
                    { this.props.content }
                </Drawer>
            </>, document.body) : null }
        </>);
    }
}
