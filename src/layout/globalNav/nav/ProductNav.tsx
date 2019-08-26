import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { ArrowDownIcon } from "../../../icon/ArrowDownIcon";
import { Popover } from "../../../overlay/Popover";
// import { Translation } from "app/Translation";
// import { Auth } from "app/data/auth/Auth";
import styled from "../../../styled-components";
import { Spacer } from "../../Spacer";
import { Translation } from "../translations/Translation";
import { ProductNavLineSeparator } from "./ProductNavLineSeparator";
import { AlethioIcon } from "../../../icon/AlethioIcon";
import { Label } from "../../../data/Label";
import { ExternalLink } from "../../../control/ExternalLink";

const AlethioLogoWrapper = styled.div`
    color: ${({theme}) => theme.colors.alethioLogo};
    padding: 20px;
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
`;

const NavWidgetInner = styled.div`
    cursor: pointer;
    /* width: 74px; */
    height: 50px;
    display: flex;
    align-items: center;
    z-index: 1;
`;
const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export interface IProductNavProps {
    translation: Translation;
    productName: string;
}

@observer
export class ProductNav extends React.Component<IProductNavProps> {
    @observable
    layerOpen = false;

    render() {
        let tr = this.props.translation;
        return (
            <>
            { this.layerOpen ? <Mask onClick={() => { this.layerOpen = false; }} /> : null }
            <Popover visible={this.layerOpen} placement="bottom-start" offset={8} content={
                <NavMenuWrapper>
                    <NavMenuLabel>Developer API</NavMenuLabel>
                    <NavMenuItem>
                        <ExternalLink newTab={false}>API Docs</ExternalLink>
                    </NavMenuItem>
                    <NavMenuItem>
                        <ExternalLink newTab={false}>API Developer Portal</ExternalLink>
                    </NavMenuItem>
                    <ProductNavLineSeparator />
                    <NavMenuLabel>Network Health</NavMenuLabel>
                    <NavMenuItem>
                        <ExternalLink newTab={false} href="https://ethstats.io/">Ethstats</ExternalLink>
                    </NavMenuItem>
                    <ProductNavLineSeparator />
                    <NavMenuLabel>About</NavMenuLabel>
                    <NavMenuItem>
                        <ExternalLink newTab={false} href="https://company.aleth.io/">Company</ExternalLink>
                    </NavMenuItem>
                    <Spacer height="8px" />
                </NavMenuWrapper>
            } style={{borderRadius: "8px"}} noArrow>
                <NavWidgetInner onClick={() => { this.layerOpen = !this.layerOpen; }} >
                    <AlethioLogoWrapper>
                        <AlethioIcon size={24} />
                    </AlethioLogoWrapper>
                    <div style={{
                        color: "rgb(53, 110, 255)",
                        fontSize: "20px",
                        fontWeight: 100
                    }}>{ tr.get("general.company") }</div>
                    <div style={{
                        color: "rgb(53, 110, 255)",
                        fontSize: "20px",
                        fontWeight: "normal"
                    }}>{ this.props.productName }</div>
                    <ArrowDownIcon />
                </NavWidgetInner>
            </Popover>
            </>
        );
    }
}
