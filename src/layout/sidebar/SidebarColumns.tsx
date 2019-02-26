import * as React from "react";
import styled from "../../styled-components";
import { Sidebar } from "./Sidebar";
import { LogoContainer } from "./LogoContainer";
import { Spacer } from "../Spacer";
import { observable, when, action } from "mobx";
import { getOffset } from "@puzzl/browser/lib/dom";
import { observer } from "mobx-react";
import { SidebarPageTitle } from "./SidebarPageTitle";

const SPACER_HEIGHT = 64;
const MAX_COLUMNS = 7;

const ListAsideRoot = styled.div`
    flex: 1 1 auto;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
`;

export interface ISidebarColumnsProps {
    itemSize: number;
    Logo: React.ReactNode;
    pageTitle: string;
    mobileVisible?: boolean;
    children?: React.ReactElement<{}>[];
}

/**
 * Specialized sidebar component for displaying lists of fixed-size items, grouped in columns (e.g. tx bubbles)
 *
 * It dynamically changes its sticky behavior based on the content
 */
@observer
export class SidebarColumns extends React.Component<ISidebarColumnsProps> {
    @observable.ref
    private listEl: HTMLDivElement;
    @observable.ref
    private rootEl: HTMLDivElement;
    @observable
    private listHeight: number | undefined;
    @observable
    private stickyMode = true;

    render() {
        return (
            <Sidebar
                contentRef={ref => this.rootEl = ref!}
                sticky={this.stickyMode}
                mobileVisible={this.props.mobileVisible}
            >
                <SidebarPageTitle>{ this.props.pageTitle }</SidebarPageTitle>
                <LogoContainer>
                    { this.props.Logo }
                </LogoContainer>
                <Spacer height={`${SPACER_HEIGHT}px`} />
                <div style={{
                    height: this.listHeight,
                    display: "flex",
                    // Fixes flexbox behavior in FF/Edge,
                    // see https://stackoverflow.com/questions/44386102/flexbox-wrap-does-not-work-properly-in-firefox
                    minHeight: 0
                }} ref={ref => this.listEl = ref!}>
                    <ListAsideRoot>
                        { this.props.children }
                    </ListAsideRoot>
                </div>
            </Sidebar>
        );
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        when(() => !!this.listEl && !!this.rootEl, () => {
            this.doLayout();
        });
    }

    componentDidUpdate(prevProps: ISidebarColumnsProps) {
        if (this.props.children !== prevProps.children || this.props.itemSize !== prevProps.itemSize) {
            this.doLayout();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    private handleResize = () => {
        this.doLayout();
    }

    private doLayout() {
        if (!this.listEl || !this.rootEl) {
            return;
        }

        let listOffsetTop = getOffset(this.listEl).top;
        let bottomSpacing = parseInt(getComputedStyle(this.rootEl).getPropertyValue("padding-bottom"), 10);
        let viewportHeight = window.innerHeight;
        let availListHeight = viewportHeight - bottomSpacing - listOffsetTop;

        if (!this.props.children) {
            this.setSticky(true);
            return;
        }

        let maxItemsPerColumn = Math.floor(availListHeight / this.props.itemSize);
        let maxItems = MAX_COLUMNS * maxItemsPerColumn;
        if (this.props.children.length > maxItems) {
            let itemsPerColumn = Math.ceil(this.props.children.length / MAX_COLUMNS);
            this.setSticky(false, itemsPerColumn * this.props.itemSize);
        } else {
            this.setSticky(true);
        }
    }

    @action
    private setSticky(enabled: boolean, listHeight?: number) {
        this.stickyMode = enabled;
        this.listHeight = listHeight;
    }
}
