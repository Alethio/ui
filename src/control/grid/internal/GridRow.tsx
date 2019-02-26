import * as React from "react";
import styled from "../../../styled-components";

const GRID_CELL_PADDING_X = 32;

interface ISpacerProps {
    odd?: boolean;
    className?: string;
}
const Spacer = styled<ISpacerProps, "div">("div")`
    height: 32px;
    background-color: ${({ odd, theme }) => odd ? theme.colors.gridOddRowBg : theme.colors.gridEvenRowBg};
`;

interface IItemProps {
    odd?: boolean;
    className?: string;
}
const Item = styled<IItemProps, "div">("div")`
    height: 32px;
    padding: 0 ${GRID_CELL_PADDING_X}px;
    background-color: ${({ odd, theme }) => odd ? theme.colors.gridOddRowBg : theme.colors.gridEvenRowBg};
`;
const VertBorder = styled.div`
    background-color: ${props => props.theme.colors.gridBorder};
`;

interface IGridRowProps {
    odd?: boolean;
}

/** @internal */
export class GridRow extends React.PureComponent<IGridRowProps> {
    render() {
        const propsChildren: React.ReactChild[] = React.Children.toArray(this.props.children);
        const resultChildren = propsChildren.reduce((acc: React.ReactChild[], c, i) => {
            acc.push(<Item odd={this.props.odd} key={-i - 1}>{c}</Item>);
            if (i !== propsChildren.length - 1) {
                acc.push(<VertBorder key={i + 1} />);
            }
            return acc;
        }, [
            <Spacer odd={this.props.odd} key={0} />
        ]);
        resultChildren.push(<Spacer odd={this.props.odd} key={propsChildren.length + 1} />);

        return resultChildren;
    }
}
