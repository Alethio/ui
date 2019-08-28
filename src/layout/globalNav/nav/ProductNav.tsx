import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { ArrowDownIcon } from "../../../icon/ArrowDownIcon";
import styled from "../../../styled-components";
import { Spacer } from "../../Spacer";
import { Translation } from "../translations/Translation";
import { ProductNavLineSeparator } from "./ProductNavLineSeparator";
import { AlethioIcon } from "../../../icon/AlethioIcon";
import { Label } from "../../../data/Label";
import { ExternalLink } from "../../../control/ExternalLink";
import { Drawer } from "./Drawer";
import { Fade } from "../../../fx/Fade";
import { INavItems } from "./items/INavItems";

const AlethioLogoWrapper = styled.div`
    color: ${({theme}) => theme.colors.alethioLogo};
    padding: 20px;
`;
const AlethioCompanyName = styled.div`
    font-size: 20px;
    font-weight: 200;
`;
const AlethioProductName = styled.div`
    font-size: 20px;
    font-weight: normal;
`;

const NavMenuWrapper = styled.div`
    color: ${({theme}) => theme.colors.base.primary.color};
    padding: 0;
    min-width: 240px;
`;
const NavMenuLabel = styled(Label)`
    padding: 8px;
    text-align: left;
`;
const NavMenuItem = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
`;

const NavWidgetInner = styled.div`
    color: ${({theme}) => theme.colors.alethioLogo};
    cursor: pointer;
    display: flex;
    align-items: center;
`;
const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    background-color: #000000;
`;

export interface IProductNavProps {
    translation: Translation;
    productName: string;
    items: INavItems;
}

@observer
export class ProductNav extends React.Component<IProductNavProps> {
    @observable
    layerOpen = false;

    render() {
        let tr = this.props.translation;

        return (<>
            <NavWidgetInner onClick={this.toggleLayer} >
                <AlethioLogoWrapper>
                    <AlethioIcon size={24} />
                </AlethioLogoWrapper>
                <AlethioCompanyName>{ tr.get("general.company") }</AlethioCompanyName>
                <AlethioProductName>{ this.props.productName }</AlethioProductName>
                <ArrowDownIcon />
            </NavWidgetInner>
            { ReactDOM.createPortal(<>
                <Fade duration={.2} active={this.layerOpen}>
                    <Mask onClick={this.toggleLayer} />
                </Fade>
                <Drawer open={this.layerOpen}>
                    <NavMenuWrapper>
                        <NavWidgetInner onClick={this.toggleLayer}>
                            <AlethioLogoWrapper>
                                <AlethioIcon size={24} />
                            </AlethioLogoWrapper>
                            <AlethioCompanyName>{ tr.get("general.company") }</AlethioCompanyName>
                        </NavWidgetInner>
                        <ProductNavLineSeparator style={{marginTop: "-1px"}} />
                        {
                            this.props.items.map((group, gIdx) => <React.Fragment key={"group_" + gIdx}>
                                { gIdx ? <ProductNavLineSeparator /> : null }
                                <NavMenuLabel>{ this.props.translation.get(group.label) }</NavMenuLabel>
                                { group.items.map((link, lIdx) => <NavMenuItem key={"link_" + lIdx}>
                                    { link.Icon ? <link.Icon /> : null }
                                    <ExternalLink newTab={false} href={link.url}>
                                        { this.props.translation.get(link.label) }
                                    </ExternalLink>
                                </NavMenuItem>) }
                            </React.Fragment>)
                        }
                        <Spacer height="8px" />
                    </NavMenuWrapper>
                </Drawer>
            </>, document.body) }
        </>);
    }

    private toggleLayer = () => {
        this.layerOpen = !this.layerOpen;
        document.body.style.overflowY = this.layerOpen ? "hidden" : "auto";
    }
}
