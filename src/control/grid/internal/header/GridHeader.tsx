import * as React from "react";
import styled from "../../../../styled-components";
import { GridColumnSelector } from "./GridColumnSelector";
import { IGridFieldBase } from "../../state/IGridFieldBase";

interface IGridHeaderProps {
    fields: IGridFieldBase[];
    onFieldsChange(key: string, checked: boolean): void;
}

const Spacer = styled.div`
    height: 32px;
`;
const HeaderSpacer = Spacer.extend`
    border-bottom: 1px solid ${props => props.theme.colors.gridBorder};
    background-color: ${props => props.theme.colors.gridEvenRowBg};
`;
const HeaderVertBorder = styled.div`
    background-color: ${props => props.theme.colors.gridBorder};
    height: 100%;
    align-self: end;
`;

/** @internal */
export class GridHeader extends React.PureComponent<IGridHeaderProps> {
    render() {
        const propsChildren: React.ReactChild[] = React.Children.toArray(this.props.children);
        const resultChildren = propsChildren.reduce((acc: React.ReactChild[], c, i) => {
            acc.push(<span key={-i - 1}>{c}</span>);
            if (i !== propsChildren.length - 1) {
                acc.push(<HeaderVertBorder key={i + 1} />);
            }
            return acc;
        }, [
            <HeaderSpacer key={0} >
                <GridColumnSelector onChange={(key: string, checked: boolean) => {
                    this.props.onFieldsChange(key, checked);
                }} fields={this.props.fields} />
            </HeaderSpacer>
        ]);
        resultChildren.push(<HeaderSpacer key={propsChildren.length + 1} />);

        return resultChildren;
    }
}
