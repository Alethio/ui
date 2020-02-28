import * as React from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Popover, IPopoverProps } from "../../overlay/Popover";
import { contains } from "@puzzl/browser/lib/dom";
import { DomNodeProxy } from "../../util/react/DomNodeProxy";
import { Fade } from "../../fx/Fade";

export interface IDropdownProps<TItem> {
    popoverProps?: Partial<Omit<IPopoverProps, "visible" | "content">>;
    /** Close layer when menu item is selected (Default = true) */
    closeOnSelect?: boolean;
    children: ((params: {isOpen: boolean; requestToggle(): void; }) => React.ReactElement<{}>) | React.ReactElement<{}>;
    renderMenu(onSelectItem: (item: TItem) => void): React.ReactElement<{}>;
    onSelect?(item: TItem): void;
}

@observer
export class Dropdown<TItem> extends React.Component<IDropdownProps<TItem>> {
    static defaultProps: Pick<IDropdownProps<any>, "closeOnSelect"> = {
        closeOnSelect: true
    };

    @observable private layerOpen = false;
    /** Prevents animation clipping by keeping the layer mounted until animation finishes */
    @observable private layerMounted = false;
    private layerEl: HTMLElement;
    private targetEl: HTMLElement;

    constructor(props: IDropdownProps<TItem>) {
        super(props);
    }

    render() {
        let { popoverProps, children } = this.props;
        return (
            <Popover
                visible={this.layerMounted}
                placement="bottom-start"
                offset={8}
                content={(_, __, scheduleUpdate) => this.renderPopover(scheduleUpdate)}
                {...popoverProps}
            >{
                <DomNodeProxy onMount={el => this.targetEl = el} onUnmount={() => this.targetEl = (void 0)!}>
                    { typeof children === "function" ?
                    children({ isOpen: this.layerOpen, requestToggle: this.handleLayerToggle}) :
                    children as React.ReactElement<{}>
                    }
                </DomNodeProxy>
            }</Popover>
        );
    }

    private renderPopover(scheduleUpdate: () => void) {
        return <Fade
            innerRef={ref => this.layerEl = ref!}
            in={this.layerOpen}
            onFinished={this.handleAnimationFinished}
            onEnter={scheduleUpdate}
        >
            { this.props.renderMenu(this.handleSelectItem) }
        </Fade>;
    }

    private handleAnimationFinished = () => {
        if (!this.layerOpen) {
            this.layerMounted = false;
        }
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

    @action
    private toggleLayer() {
        this.layerOpen = !this.layerOpen;
        if (this.layerOpen) {
            this.layerMounted = true;
        }

        if (this.layerOpen) {
            document.addEventListener("click", this.handleDocumentClick);
        } else {
            document.removeEventListener("click", this.handleDocumentClick);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleDocumentClick);
    }
}
