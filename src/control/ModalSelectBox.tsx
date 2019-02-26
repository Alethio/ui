import * as React from "react";
import styled from "../styled-components";
import { CloseSmallIcon } from "../icon/CloseSmallIcon";

interface IModalSelectBox {
    onClose(): void;
}

const CloseButton = styled.div`
    cursor: pointer;
    line-height: 1;
    color: ${({theme}) => theme.colors.closeBtn};
`;
const ModalSelectBoxWrapper = styled.div`
    padding: 16px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.overlayBg};
    border: 1px solid #D0DEF2;
    box-shadow: 0 2px 4px 0 rgba(51,69,100,0.07), 0 6px 16px 0 rgba(51,69,100,0.08);
`;

export class ModalSelectBox extends React.Component<IModalSelectBox> {
    render() {
        return (
            <ModalSelectBoxWrapper>
                <div style={{padding: "4px"}}>
                    <CloseButton onClick={this.props.onClose}>
                        <CloseSmallIcon />
                    </CloseButton>
                </div>
                { this.props.children }
            </ModalSelectBoxWrapper>
        );
    }
}
