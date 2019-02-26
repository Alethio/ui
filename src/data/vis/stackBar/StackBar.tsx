import styled, { css } from "../../../styled-components";
import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { TooltipRegular } from "../../../overlay/tooltip/TooltipRegular";

export interface IStackBarProps {
    items: IStackBarItem[];
    className?: string;
    defaultBarHeight?: number;
    maxBarHeight?: number;
    minBarHeight?: number;
}

export interface IStackBarItem {
    color: string;
    count: number;
    label: string;
    tooltip: React.ReactElement<{}>;
}

interface IStackBarItemFillProps {
    color: string;
    className?: string;
}

interface IStackBarItemProps {
    percent: number;
    height: number;
    selected: boolean;
}

const StackBarItemFill = styled<IStackBarItemFillProps, "div">("div")`
    background-color: ${({color}) => color};
    width: 100%;
    height: 100%;
`;

const StackBarItem = styled<IStackBarItemProps, "div">("div")`
    width: ${({percent}) => percent}%;
    height: ${props => props.height}px;
    transition: height .2s ease-out;

    ${props => props.selected ? css`
    > ${StackBarItemFill} {
        border-radius: 2px;
    }
    ` : css`
    &:first-child > ${StackBarItemFill} {
        border-radius: 2px 0 0 2px;
    }

    &:last-child > ${StackBarItemFill} {
        border-radius: 0 2px 2px 0;
    }` }
`;

@observer
class $StackBar extends React.Component<IStackBarProps> {
    private wrapperEl: HTMLElement;
    @observable.ref
    private selectedItem: IStackBarItem | undefined;

    render() {
        let { className, items, defaultBarHeight, maxBarHeight, minBarHeight } = this.props;

        let totalCount = items.reduce((acc, current) => acc + current.count, 0);
        return (
            <div className={className} ref={ref => this.wrapperEl = ref!}>
            { items.map((item, idx) => {
                let percent = item.count / totalCount * 100;
                let height = this.selectedItem ? (
                    item === this.selectedItem ? maxBarHeight! : minBarHeight!
                ) : defaultBarHeight!;

                return <StackBarItem
                    selected={item === this.selectedItem}
                    percent={percent}
                    height={height}
                    onMouseEnter={() => this.selectItem(item)}
                    onMouseLeave={() => this.unselectItem(item)}
                    key={idx}
                >
                    <TooltipRegular placement="right" content={item.tooltip}
                        referenceElement={() => this.wrapperEl}>
                        <StackBarItemFill color={item.color} />
                    </TooltipRegular>
                </StackBarItem>;
            }) }
            </div>
        );
    }

    private selectItem(item: IStackBarItem) {
        this.selectedItem = item;
    }

    private unselectItem(item: IStackBarItem) {
        if (this.selectedItem === item) {
            this.selectedItem = void 0;
        }
    }
}

export const StackBar = styled($StackBar)`
    height: ${props => props.maxBarHeight!}px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`;
StackBar.defaultProps = {
    defaultBarHeight: 28,
    minBarHeight: 28,
    maxBarHeight: 28
};
