import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Popover, IPopoverProps } from "../../overlay/Popover";
import { contains } from "@puzzl/browser/lib/dom";
import { DomNodeProxy } from "../../util/react/DomNodeProxy";

export interface IDropdownProps<TItem> {
    popoverProps?: Omit<IPopoverProps, "visible" | "content">;
    /** Close layer when menu item is selected (Default = true) */
    closeOnSelect?: boolean;
    children: ((requestToggle: () => void) => React.ReactElement<{}>) | React.ReactElement<{}>;
    renderMenu(onSelectItem: (item: TItem) => void): React.ReactElement<{}>;
    onSelect?(item: TItem): void;
}

@observer
export class Dropdown<TItem> extends React.Component<IDropdownProps<TItem>> {
    static defaultProps: Pick<IDropdownProps<any>, "closeOnSelect"> = {
        closeOnSelect: true
    };

    @observable
    private layerVisible = false;
    private layerEl: HTMLElement;
    private targetEl: HTMLElement;

    constructor(props: IDropdownProps<TItem>) {
        super(props);
    }

    render() {
        let { popoverProps, children } = this.props;
        return (
            <Popover
                visible={this.layerVisible}
                placement="bottom-start"
                offset={8}
                content={this.renderPopover()}
                {...popoverProps}
            >
                <DomNodeProxy onMount={el => this.targetEl = el} onUnmount={() => this.targetEl = (void 0)!}>
                    { typeof children === "function" ?
                    children(this.handleLayerToggle) :
                    children as React.ReactElement<{}>
                    }
                </DomNodeProxy>
            </Popover>
        );
    }

    private renderPopover() {
        return <DomNodeProxy onMount={el => this.layerEl = el} onUnmount={() => this.layerEl = (void 0)!}>
            { this.props.renderMenu(this.handleSelectItem) }
        </DomNodeProxy>;
    }

    private handleSelectItem = (item: TItem) => {
        if (this.props.closeOnSelect) {
            this.toggleLayer();
        }

        if (this.props.onSelect) {
            this.props.onSelect(item);
        }
    }

    private handleLayerToggle = () => {
        this.toggleLayer();
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (!contains(this.layerEl, e.target as HTMLElement) &&
            !contains(this.targetEl, e.target as HTMLElement)) {
            this.toggleLayer();
        }
    }

    private toggleLayer() {
        this.layerVisible = !this.layerVisible;
        if (this.layerVisible) {
            document.addEventListener("click", this.handleDocumentClick);
        } else {
            document.removeEventListener("click", this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleDocumentClick);
    }
}
