import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "../styled-components";
import { Manager, Reference, Popper} from "react-popper";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { ModalSelectBox } from "./ModalSelectBox";

export interface ISelectBoxOffset {
    left: number;
    top: number;
}

interface ISelectBoxProps {
    disabled?: boolean;
    // string in format "left, top"
    offset?: ISelectBoxOffset;
    render(args: {requestClose(): void}): React.ReactNode;
}
const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

@observer
export class SelectBox extends React.Component<ISelectBoxProps> {

    @observable
    private isOpened = false;

    render() {
        let { disabled } = this.props;

        return (
            <Manager>
                <Reference>
                    {({ref}) =>
                        <div ref={ref} onClick={!disabled ? this.openSelectBox : void 0} style={{
                            cursor: !disabled ? "pointer" : "default"
                        }}>
                            { this.props.children }
                        </div>
                    }
                </Reference>
                {this.isOpened ?
                ReactDOM.createPortal(
                    <>
                        <Overlay onClick={this.closeSelectBox} />
                        <Popper modifiers={{
                            offset: {
                                offset: this.props.offset ?
                                    this.props.offset.left + "px, " + this.props.offset.top + "px" :
                                    "auto"
                            },
                            flip: {
                                enabled: false
                            },
                            preventOverflow: {
                                enabled: true
                            },
                            hide: {
                                enabled: false
                            }
                        }} placement="bottom-start">
                            {({ref, placement, style}) => (
                                <div ref={ref} data-placement={placement} style={style}>
                                    <ModalSelectBox onClose={this.closeSelectBox}>
                                        { this.props.render({requestClose: this.closeSelectBox}) }
                                    </ModalSelectBox>
                                </div>
                            )}
                        </Popper>
                    </>,
                    document.body
                )
                : null }
            </Manager>
        );
    }

    private openSelectBox = () => {
        this.isOpened = true;
    }

    private closeSelectBox = () => {
        this.isOpened = false;
    }
}
