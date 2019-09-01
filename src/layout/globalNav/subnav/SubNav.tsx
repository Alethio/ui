import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";
import styled from "../../../styled-components";
import { HamburgerSkinnyIcon } from "../../../icon/HamburgerSkinnyIcon";
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
    content?(requestClose: () => void): React.ReactNode;
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
                    this.toggleLayer();
                }
                if (this.props.handler) {
                    this.props.handler();
                }
            }} style={{padding: "22px 16px", cursor: "pointer"}}>
                <HamburgerSkinnyIcon size={24} />
            </div>
            { this.props.content ? ReactDOM.createPortal(<>
                <Fade duration={.2} active={this.layerOpen}>
                    <Mask onClick={this.requestClose} />
                </Fade>
                <Drawer open={this.layerOpen}>
                    { this.props.content(this.requestClose) }
                </Drawer>
            </>, document.body) : null }
        </>);
    }

    private requestClose = () => {
        this.layerOpen = false;
    }

    private toggleLayer = () => {
        this.layerOpen = !this.layerOpen;
    }
}
