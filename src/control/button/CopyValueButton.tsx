import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Clipboard } from "@puzzl/browser/lib/Clipboard";
import { IconButton } from "../IconButton";
import { IClipboard } from "../../data/IClipboard";
import { CopyIcon } from "../../icon/CopyIcon";
import { StatusConfirmedIcon } from "../../icon/StatusConfirmedIcon";

export interface ICopyValueButtonProps {
    /** Value to copy to clipboard */
    value: string;
    className?: string;
    clipboard?: IClipboard;
    confirmationVisibleFor?: number;
}

/** Copy-to-clipboard button */
@observer
export class CopyValueButton extends React.Component<ICopyValueButtonProps> {
    static defaultProps: Pick<ICopyValueButtonProps, "confirmationVisibleFor"> = {
        confirmationVisibleFor: 3000
    };

    @observable
    private confirmationVisible = false;
    private confirmationHideId: number | undefined;

    render() {
        return <IconButton
            className={this.props.className}
            Icon={this.confirmationVisible ? StatusConfirmedIcon : CopyIcon}
            color={theme => theme.colors.copyIcon}
            onClick={this.copyValue}
        />;
    }

    componentDidUpdate(prevProps: ICopyValueButtonProps) {
        if (prevProps.value !== this.props.value && this.confirmationVisible) {
            this.confirmationVisible = false;
            if (this.confirmationHideId) {
                clearTimeout(this.confirmationHideId);
                this.confirmationHideId = void 0;
            }
        }
    }

    componentWillUnmount() {
        if (this.confirmationHideId) {
            clearTimeout(this.confirmationHideId);
        }
    }

    private copyValue = () => {
        let clipboard = this.props.clipboard || new Clipboard(document);
        clipboard.copy(this.props.value);
        this.confirmationVisible = true;
        this.confirmationHideId = setTimeout(
            () => this.confirmationVisible = false,
            this.props.confirmationVisibleFor!
        );
    }
}
