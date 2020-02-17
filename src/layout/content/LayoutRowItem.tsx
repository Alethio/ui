import * as React from "react";
import styled from "styled-components";
import { LayoutBoxItem } from "./LayoutBoxItem";
import * as ReactIs from "react-is";

interface ILayoutRowItemWrapperProps {
    fullRow?: boolean;
    className?: string;
}

const $LayoutRowItemWrapper: React.StatelessComponent<ILayoutRowItemWrapperProps> = ({
    children,
    className
}) => (
    <div className={className}>{children}</div>
);

const LayoutRowItemWrapper = styled($LayoutRowItemWrapper)`
    display: flex;
    flex: ${props => props.fullRow ? "1 1" : "0 0"} auto;
`;

interface ILayoutInfoBoxItemProps {
    fullRow?: boolean;
    className?: string;
}
const $LayoutInfoBoxItem: React.StatelessComponent<ILayoutInfoBoxItemProps> = ({
    children,
    className
}) => (
    <div className={className}>{children}</div>
);
const LayoutInfoBoxItem = styled($LayoutInfoBoxItem)`
    display: flex;
    flex: ${({fullRow}) => fullRow ? "1 1" : "0 1"} auto;
    flex-wrap: wrap;
`;

export interface ILayoutRowItemProps {
    isBeginningOfRow?: boolean;
    ignoreFirstLabel?: boolean;
    fullRow?: boolean;
    baseHeight?: number;
    autoHeight?: boolean;
    autoWidth?: boolean;
    justifyContent?: string;
}

export class LayoutRowItem extends React.PureComponent<ILayoutRowItemProps> {
    static _brand = "layoutRowItem";
    render() {
        const childrenArray = React.Children.toArray(this.props.children)
            .reduce<React.ReactNode[]>((outArr, child) => {
                if (ReactIs.isFragment(child)) {
                    outArr.push(...React.Children.map((child.props as React.Props<{}>).children, c => {
                        if (!ReactIs.isElement(c)) {
                            // tslint:disable-next-line:no-console
                            console.error(
                                `Fragment passed to LayoutRowItem contains a child that is not a React.Element.`, c);
                            return c;
                        }
                        return React.cloneElement(c, {});
                    }));
                } else {
                    outArr.push(child);
                }
                return outArr;
            }, [] as React.ReactChild[]);

        const labelElement = childrenArray.shift();
        return (
            <LayoutRowItemWrapper fullRow={this.props.fullRow}>
                { this.props.ignoreFirstLabel ? null :
                    <LayoutBoxItem isBeginningOfRow={this.props.isBeginningOfRow} baseHeight={this.props.baseHeight}
                        autoWidth={this.props.autoWidth}>
                        { labelElement }
                    </LayoutBoxItem>
                }
                { childrenArray.length === 1 ?
                    this.childrenArrayRender(childrenArray) :
                    <LayoutInfoBoxItem fullRow={this.props.fullRow}>
                        { this.childrenArrayRender(childrenArray) }
                    </LayoutInfoBoxItem>
                }
            </LayoutRowItemWrapper>
        );
    }

    private childrenArrayRender(children: React.ReactNode[]) {
        return children.map((c, idx) => {
            return (
                <LayoutBoxItem baseHeight={this.props.baseHeight} autoHeight={this.props.autoHeight}
                    autoWidth={this.props.autoWidth} key={idx}
                >
                    { c }
                </LayoutBoxItem>
            );
        });
    }
}
