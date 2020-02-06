import * as React from "react";
import ReactDOM from "react-dom";
import styled from "../../styled-components";
import { observer } from "mobx-react";
import { Fade } from "../../fx/Fade";
import { Mask } from "../../overlay/Mask";
import { CloseIcon } from "../../icon/CloseIcon";
import { ToolbarIconButton } from "../toolbar/ToolbarIconButton";
import { TopbarItem } from "./TopbarItem";
import * as PropTypes from "prop-types";

const Layer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export interface IMobileMenuLayerProps {
    open: boolean;
    onRequestClose(): void;
}

/**
 * Mobile navigation menu. Can receive `MenuItem` components as children.
 */
@observer
export class MobileMenuLayer extends React.Component<IMobileMenuLayerProps> {
    // We use legacy context because the menu and its children
    // may be instantiated from different apps library instances and the createContext API won't work in this case
    /** @internal */
    static childContextTypes = {
        // Just so we don't have to import react prop-types. We don't care about the shape anyway
        requestClose: PropTypes.any
    };

    /** @internal */
    getChildContext() {
        return { requestClose: this.onClose };
    }

    render() {
        let { open } = this.props;

        return ( open ?
        ReactDOM.createPortal(<Fade duration={.2}>
            <Mask onClick={this.handleRootClick} />
            <Layer>
                <TopbarItem>
                    <ToolbarIconButton onClick={this.onClose} Icon={CloseIcon} iconSize={48} />
                </TopbarItem>
                <Content>
                    { this.props.children }
                </Content>
            </Layer>
        </Fade>, document.body)
        : null );
    }

    private handleRootClick = (e: React.MouseEvent<{}>) => {
        if (e.target === e.currentTarget) {
            this.onClose();
        }
    }

    private onClose = () => {
        this.props.onRequestClose();
    }

}
