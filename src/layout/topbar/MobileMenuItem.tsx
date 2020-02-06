import * as React from "react";
import styled from "../../styled-components";
import { ValueBox } from "../content/box/ValueBox";
import * as PropTypes from "prop-types";

const MenuIconRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    background-color: ${props => props.theme.colors.overlayBg};
    border-radius: 50%;
    box-shadow: 0 24px 56px 0 rgba(39, 54, 86, 0.16);
    margin: 12px;
`;

const MenuItemRoot = styled.div`
    display: flex;
    align-items: center;
`;

type ChildrenFn = (requestClose: () => void) => React.ReactNode;

interface IMobileMenuItemProps {
    title: string;
    children: React.ReactNode | ChildrenFn;
    sticky?: boolean;
}

/**
 * Component for mobile navigation bar menu items
 *
 * Depends on context created at runtime and cannot be extracted to @alethio/ui
 * (unless we port it to legacy context API, just like the Accordion component)
 */
export class MobileMenuItem extends React.Component<IMobileMenuItemProps> {
    static contextTypes = {
        requestClose: PropTypes.any
    };

    /** @internal */
    context: {
        requestClose(): void;
    };

    render() {
        let { children } = this.props;
        let { requestClose } = this.context;

        return <MenuItemRoot>
                <MenuIconRoot onClick={!this.props.sticky ? requestClose : void 0 }>
                    { typeof children === "function" ? (children as ChildrenFn)(requestClose) : children}
                </MenuIconRoot>
                <ValueBox>{this.props.title}</ValueBox>
            </MenuItemRoot>;
    }
}
