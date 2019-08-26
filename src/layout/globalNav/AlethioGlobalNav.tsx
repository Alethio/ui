import React from "react";
import styled, { withTheme } from "../../styled-components";
import { HorizontalBar } from "../HorizontalBar";
import { ITheme } from "../../theme/ITheme";
import { UserProfileWidget } from "./user/UserProfileWidget";
import { IUserProfileBasic } from "./user/IUserProfileBasic";
import { IAuth } from "./auth/IAuth";
import { observable } from "mobx";
import { Translation, ITranslations } from "./translations/Translation";
import { observer } from "mobx-react";
import { Filler } from "../Filler";
import { ProductNav } from "./nav/ProductNav";
import { HamburgerIcon } from "../../icon/HamburgerIcon";
import { ResponsiveContainer } from "../responsive/ResponsiveContainer";

const StyledHorizontalBar = styled(HorizontalBar)`
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
    align-items: center;
`;

const UserWidgetWrapper = styled.div`
    padding: 7px;
`;

/**
 * Will the alethio global nav be sticky ???
 */
interface IAlethioGlobalNavProps {
    zIndex?: number;
    locale: string;
    productName: string;
    theme: ITheme;
    auth: IAuth;
    userProfile?: IUserProfileBasic;
    subNavOnlyMobile?: boolean;
    subNavHandler?(): void;
}

@observer
class $AlethioGlobalNav extends React.Component<IAlethioGlobalNavProps> {
    @observable private translations: Translation | undefined;
    constructor(props: IAlethioGlobalNavProps) {
        super(props);
        this.loadTranslations().catch(err => {
            this.translations = void 0;
        });
    }
    componentDidUpdate(prevProps: IAlethioGlobalNavProps) {
        if (prevProps.locale !== this.props.locale) {
            this.loadTranslations().catch(err => {
                this.translations = void 0;
            });
        }
    }
    async loadTranslations() {
        let translations: ITranslations | undefined;
        try {
            /**
             * HACK: i cannot do loading similar to other projects:
             *      await import("./translations/" + this.props.locale + ".json");
             * and loading ts like that gives an error:
             *      await import("./translations/" + this.props.locale);
             * TODO: solve this problem
             */
            // translations = await import("./translations/en-US.json");
            switch (this.props.locale) {
                case "zh-CN":
                    translations = await import("./translations/zh-CN").then(gg => gg.translations);
                    break;
                case "en-US":
                default:
                    translations = await import("./translations/en-US").then(gg => gg.translations);
                    break;
            }
            if (translations !== void 0) {
                this.translations = new Translation(translations);
            }
        } catch (err) {
            this.translations = void 0;
        }
    }

    render() {
        if (this.translations === void 0) {
            return "NO TRANSLATIONS";
        }
        let subNavIcon = <div onClick={this.props.subNavHandler} style={{padding: "22px 16px", cursor: "pointer"}}>
            <HamburgerIcon size={20} />
        </div>;
        return (
            <StyledHorizontalBar zIndex={this.props.zIndex} sticky height={this.props.theme.spacing.topbarHeight}>
                {
                    this.props.subNavHandler ?
                        this.props.subNavOnlyMobile ?
                        <ResponsiveContainer behavior="show" forScreenWidth={{lowerThan: 640}}>
                            { subNavIcon }
                        </ResponsiveContainer>
                        : subNavIcon
                    : null
                }
                <ProductNav translation={this.translations} productName={this.props.productName} />
                <Filler />
                { this.props.children }
                <Filler />
                {
                    this.props.auth.isAuthenticated() && this.props.userProfile ?
                    <UserWidgetWrapper>
                        <UserProfileWidget
                            auth={this.props.auth}
                            userProfile={this.props.userProfile}
                            translation={this.translations}
                        />
                    </UserWidgetWrapper>
                    : "LOGIN"
                }
            </StyledHorizontalBar>
        );
    }
}

export const AlethioGlobalNav = withTheme($AlethioGlobalNav);
