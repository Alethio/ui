import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { IUserProfileBasic } from "./IUserProfileBasic";
import { Popover } from "../../../overlay/Popover";
import styled from "../../../styled-components";
import { Spacer } from "../../Spacer";
import { UserProfileLineSeparator } from "./UserProfileLineSeparator";
import { UserProfileDetails, UserProfileDetailsEmail, UserProfileDetailsPlan } from "./UserProfileDetails";
import { UserProfileMenuItem } from "./UserProfileMenuItem";
import { Translation } from "../translations/Translation";
import { IAuth } from "../auth/IAuth";
import { ILinkItem } from "./links/ILinkItem";
import { ExternalLink as ExternalLinkBase } from "../../../control/ExternalLink";

const UserProfileMenuWrapper = styled.div`
    color: ${({theme}) => theme.colors.base.primary.color};
    padding: 8px 0;
    min-width: 120px;
`;

const UserProfileWidgetInner = styled.div`
    cursor: pointer;
`;

const ExternalLink = styled(ExternalLinkBase)`
    color: inherit;
`;

const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export interface IUserProfileWidgetProps {
    auth: IAuth;
    userProfile: IUserProfileBasic;
    links: ILinkItem[] | undefined;
    translation: Translation;
}

@observer
export class UserProfileWidget extends React.Component<IUserProfileWidgetProps> {
    @observable
    layerOpen = false;

    render() {
        let tr = this.props.translation;
        return (
            <>
            { this.layerOpen ? <Mask onClick={() => { this.layerOpen = false; }} /> : null }
            <Popover visible={this.layerOpen} placement="bottom-end" offset={8} content={
                <UserProfileMenuWrapper>
                    <UserProfileDetails>
                        <UserProfileDetailsEmail>{ this.props.userProfile.email }</UserProfileDetailsEmail>
                        <Spacer height="8px" />
                        { this.props.userProfile.plan ?
                        <UserProfileDetailsPlan>
                            { tr.get("userProfile.plan." + this.props.userProfile.plan) }
                        </UserProfileDetailsPlan>
                        : null }
                    </UserProfileDetails>
                    <UserProfileLineSeparator />
                    { this.props.links ? this.props.links.map((link, lIdx) =>
                        <UserProfileMenuItem key={lIdx}>
                            <ExternalLink newTab={false} href={link.url}>
                                { tr.get(link.label) }
                            </ExternalLink>
                        </UserProfileMenuItem>
                    ) : null }
                    <UserProfileMenuItem onClick={() => {
                        this.layerOpen = false;
                        this.props.auth.logout();
                    }}>{ tr.get("general.logoutButton") }</UserProfileMenuItem>
                </UserProfileMenuWrapper>
            } style={{borderRadius: "8px"}} noArrow>
                <UserProfileWidgetInner onClick={() => { this.layerOpen = !this.layerOpen; }} >
                    <img
                        src={this.props.userProfile.picture}
                        style={{width: "40px", borderRadius: "50%", display: "block"}}
                    />
                </UserProfileWidgetInner>
            </Popover>
            </>
        );
    }
}
