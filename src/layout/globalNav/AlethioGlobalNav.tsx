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
import { SubNav } from "./subnav/SubNav";
import { ResponsiveContainer } from "../responsive/ResponsiveContainer";
import { Button } from "../../control/Button";
import { INavItems } from "./nav/items/INavItems";

const StyledHorizontalBar = styled(HorizontalBar)`
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.04);
    align-items: center;
`;

const UserWidgetWrapper = styled.div`
    padding: 7px;
`;
const LoginButtonWrapper = styled.div`
    padding: 14px;
`;

interface IAlethioGlobalNavProps {
    zIndex?: number;
    locale: string;
    productName: string;
    theme: ITheme;
    auth: IAuth;
    items?: string;
    userProfile?: IUserProfileBasic;
    /**
     * When set to true, the hamburger menu will be shown only on viewports smaller than 640px
     * When set to false, his presence will depend on subNavContent and subNavHandler. If any of those are set
     * the menu will always be visible, if none is set, the menu will always be hidden
     */
    subNavOnlyMobile?: boolean;
    /**
     * When present, the content will be passed to the built-in left drawer.
     * When undefined, the built-in drawer will not be used
     */
    subNavContent?: React.ReactNode;
    /**
     * Give a handler when you don't want to use the built-in drawer but handle the sub nav menu in the app
     */
    subNavHandler?(): void;
}

@observer
class $AlethioGlobalNav extends React.Component<IAlethioGlobalNavProps> {
    @observable private translations: Translation | undefined;
    @observable private navigationItems: INavItems | undefined;
    constructor(props: IAlethioGlobalNavProps) {
        super(props);
        this.loadTranslations().catch(err => {
            this.translations = void 0;
        });
        this.loadNavigationItems().catch(err => {
            this.navigationItems = void 0;
        });
    }
    componentDidUpdate(prevProps: IAlethioGlobalNavProps) {
        if (prevProps.locale !== this.props.locale) {
            this.loadTranslations().catch(err => {
                this.translations = void 0;
            });
        }
        if (prevProps.items !== this.props.items) {
            this.loadNavigationItems().catch(err => {
                this.navigationItems = void 0;
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
    async loadNavigationItems() {
        let navigationItems: INavItems | undefined;
        try {
            switch (this.props.items) {
                case "staging":
                    navigationItems = (await import("./nav/items/staging")).navItems;
                    break;
                case "prod":
                default:
                    navigationItems = (await import("./nav/items/prod")).navItems;
                    break;
            }
            if (navigationItems !== void 0) {
                this.navigationItems = navigationItems;
            }
        } catch (err) {
            this.navigationItems = void 0;
        }
    }

    render() {
        if (this.translations === void 0) {
            return "NO TRANSLATIONS";
        }
        if (this.navigationItems === void 0) {
            return "NO NAV ITEMS";
        }
        return (
            <StyledHorizontalBar zIndex={this.props.zIndex} height={this.props.theme.spacing.topbarHeight}>
                {
                    this.props.subNavHandler || this.props.subNavContent ?
                        this.props.subNavOnlyMobile ?
                        <ResponsiveContainer behavior="show" forScreenWidth={{lowerThan: 640}}>
                            <SubNav handler={this.props.subNavHandler} content={this.props.subNavContent} />
                        </ResponsiveContainer>
                        : <SubNav handler={this.props.subNavHandler} content={this.props.subNavContent} />
                    : null
                }
                <ProductNav
                    translation={this.translations}
                    productName={this.props.productName}
                    items={this.navigationItems}
                />
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
                    : <LoginButtonWrapper>
                        <Button
                            colors="primary"
                            onClick={() => { this.props.auth.login(); }}
                        >{ this.translations.get("general.loginButton") }</Button>
                    </LoginButtonWrapper>
                }
            </StyledHorizontalBar>
        );
    }
}

export const AlethioGlobalNav = withTheme($AlethioGlobalNav);
