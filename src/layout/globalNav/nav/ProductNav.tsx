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
    padding: 20px 10px 20px 0;
`;
const AlethioCompanyName = styled.div`
    font-size: 24px;
    font-weight: 500;

    @media ${props => props.theme.mediaQueries.breakPoints.lessThan620px} {
        font-size: 15px;
    }
`;
const AlethioProductName = styled.div`
    font-size: 24px;
    font-weight: 500;
    padding-left: 4px;

    @media ${props => props.theme.mediaQueries.breakPoints.lessThan620px} {
        font-size: 15px;
    }
`;

const NavMenuWrapper = styled.div`
    color: ${({theme}) => theme.colors.base.primary.color};
    padding: 0;
    min-width: 240px;

    hr:first-of-type {
        margin: 0 0 32px;
    }

    hr {
        margin: 13px 26px 32px;
    }
`;
const NavMenuLabel = styled(Label)`
    padding: 0 26px 13px;
    text-align: left;
    color: ${({theme}) => theme.colors.base.primary.color};
`;
const NavMenuItem = styled.div`
    display: flex;
    align-items: center;

    &:hover {
        background-color: ${({theme}) => theme.colors.base.bg.main}
    }

    a {
        display: flex;
        padding: 24px 26px;
        box-sizing: border-box;
        width: 100%;
        font-size: 18px;
        line-height: 23.5px;
        color: ${({theme}) => theme.colors.base.secondary.color};

        img, svg {
            display: inline-block !important;
            padding-right: 26px;
        }
    }
`;

const LinkLabel = styled.span`
    color: ${({theme}) => theme.colors.base.primary.color};
`;

const NavWidgetInner = styled.div`
    color: ${({theme}) => theme.colors.alethioLogo};
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 64px;
    padding-left: 26px;
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
    showProductName?: boolean;
    items: INavItems;
}

@observer
export class ProductNav extends React.Component<IProductNavProps> {
    @observable
    layerOpen = false;

    render() {
        console.log("this.props.showProductName:", this.props.showProductName);
        let tr = this.props.translation;

        return (<>
            <NavWidgetInner onClick={this.toggleLayer} >
                <AlethioLogoWrapper>
                    <AlethioIcon size={20} />
                </AlethioLogoWrapper>
                <AlethioCompanyName>{ tr.get("general.company") }</AlethioCompanyName>
                {
                    this.props.showProductName ?
                    <AlethioProductName>{ this.props.productName }</AlethioProductName> : null
                }
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
                                <AlethioIcon size={20} />
                            </AlethioLogoWrapper>
                            <AlethioCompanyName style={{paddingBottom: "1px"}}>{
                                 tr.get("general.company") }
                            </AlethioCompanyName>
                        </NavWidgetInner>
                        <ProductNavLineSeparator style={{marginTop: "-1px"}} />
                        {
                            this.props.items.map((group, gIdx) => <React.Fragment key={"group_" + gIdx}>
                                { gIdx ? <ProductNavLineSeparator /> : null }
                                <NavMenuLabel>{ this.props.translation.get(group.label) }</NavMenuLabel>
                                { group.items.map((link, lIdx) => <NavMenuItem key={"link_" + lIdx}>
                                    <ExternalLink newTab={false} href={link.url}>
                                        { link.Icon ? <link.Icon /> : null }
                                        <LinkLabel>{ this.props.translation.get(link.label) }</LinkLabel>
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
