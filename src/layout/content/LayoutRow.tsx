import * as React from "react";
import { ILayoutRowItemProps, LayoutRowItem } from "./LayoutRowItem";
import { LayoutRowWrapper } from "./internal/LayoutRowWrapper";
import { observable } from "mobx";
import { observer } from "mobx-react";

/**
 * This class is responsible with the layout of the content page
 * Each row of data contains one or more items of information
 * Each box contains a Label and one or more boxes
 */
interface ILayoutResponsiveOptions {
    ignoreFirstLabel?: "forMobile" | "forLowRes";
}

export interface ILayoutRowProps {
    /**
     * The minimum required width for that row to safely render all items on a single row
     * TODO: Move minWidth to ILayoutResponsiveOptions
     */
    minWidth?: number;
    responsive?: ILayoutResponsiveOptions;
}

@observer
export class LayoutRow extends React.Component<ILayoutRowProps> {
    @observable
    private smallScreen = false;

    @observable
    private isFirstLabelIgnored = false;

    // validate that c is an instance of LayoutRowItem
    private isLayoutRowItemInstance(c: React.ReactNode) {
        let childIsLayoutRowItem = false;
        try {
            const childType = (c as React.ReactElement<any>).type;
            childIsLayoutRowItem = (childType as typeof LayoutRowItem)._brand === "layoutRowItem";
        } catch (e) {
            // silent fail, assume that c is not a LayoutRowItem instance
        }
        return childIsLayoutRowItem;
    }

    render() {
        /**
         * We need to filter out the empty children, but we can't use React.Children.toArray, because it
         * breaks the keys. We keep a separate index counter and skip through the nulls
         */
        let i = 0;

        /**
         * If it's a small screen render each RowItem as an independent Row
         */
        if (this.smallScreen) {
            return React.Children.map(this.props.children, c => {
                if (c === null || c === void 0) {
                    // Just return and don't increment counter
                    return c;
                }

                const childIsLayoutRowItem = this.isLayoutRowItemInstance(c);
                return (
                    <LayoutRowWrapper
                        smallScreen={this.smallScreen} onResize={this.onResize} centerContent={this.isFirstLabelIgnored}
                    >
                        { childIsLayoutRowItem ? React.cloneElement(
                            c as React.ReactElement<ILayoutRowItemProps>,
                            {isBeginningOfRow: true, fullRow: true, ignoreFirstLabel: this.isFirstLabelIgnored}
                        ) : c }
                    </LayoutRowWrapper>
                );
            });
        } else {
            /**
             * ... otherwise render as normal, one row
             */
            return (
                <LayoutRowWrapper
                    smallScreen={this.smallScreen} onResize={this.onResize} centerContent={this.isFirstLabelIgnored}
                >
                    { React.Children.map(this.props.children, c => {
                        if (c === null || c === void 0) {
                            // Just return and don't increment counter
                            return c;
                        }

                        const childIsLayoutRowItem = this.isLayoutRowItemInstance(c);
                        return childIsLayoutRowItem ? React.cloneElement(
                            c as React.ReactElement<ILayoutRowItemProps>,
                            {isBeginningOfRow: !i++ || this.smallScreen, ignoreFirstLabel: this.isFirstLabelIgnored}
                        ) : c;
                    }) }
                </LayoutRowWrapper>
            );
        }
    }

    private onResize = (width: number) => {
        this.smallScreen = this.props.minWidth ?
            width <= this.props.minWidth :
            false;

        if (!this.props.responsive || !this.props.responsive.ignoreFirstLabel) {
            return;
        }
        this.isFirstLabelIgnored = (this.props.responsive.ignoreFirstLabel === "forLowRes" && width < 540)
            || (this.props.responsive.ignoreFirstLabel === "forMobile" && width < 460);
    }
}
