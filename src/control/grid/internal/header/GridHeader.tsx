import * as React from "react";
import styled from "../../../../styled-components";
import { GridColumnSelector } from "./GridColumnSelector";
import { IGridFieldBase } from "../../state/IGridFieldBase";

export interface IGridHeaderExtraElements {
    left?: React.ReactNode;
    right?: React.ReactNode;
}
interface IGridHeaderProps {
    fields: IGridFieldBase[];
    extraElements?: IGridHeaderExtraElements;
    onFieldsChange(key: string, checked: boolean): void;
}

const HeaderSpacer = styled.div`
    height: 32px;
    border-bottom: 1px solid ${props => props.theme.colors.gridBorder};
    background-color: ${props => props.theme.colors.gridEvenRowBg};
    display: flex;
`;
const HeaderSpacerLeft = styled(HeaderSpacer)``;
const HeaderSpacerRight = styled(HeaderSpacer)`
    justify-content: flex-end;
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
            <HeaderSpacerLeft key={0} >
                <GridColumnSelector onChange={(key: string, checked: boolean) => {
                    this.props.onFieldsChange(key, checked);
                }} fields={this.props.fields} />
                { this.props.extraElements && this.props.extraElements.left }
            </HeaderSpacerLeft>
        ]);
        resultChildren.push(
            <HeaderSpacerRight key={propsChildren.length + 1} >
                { this.props.extraElements && this.props.extraElements.right }
            </HeaderSpacerRight>
        );

        return resultChildren;
    }
}
