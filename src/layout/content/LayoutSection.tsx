import * as React from "react";
import styled from "styled-components";
import { Spacer } from "../Spacer";

export interface ILayoutSectionProps {
    useWrapper?: boolean;
}

const LayoutSectionWrapper = styled.div`
    flex: 1 1 auto;
    box-sizing: border-box;
`;

export class LayoutSection extends React.Component<ILayoutSectionProps> {
    render() {
        let children = React.Children.toArray(this.props.children);

        return children.length ?
            (
            <>
                {
                    this.props.useWrapper ?
                    <LayoutSectionWrapper>
                        { this.props.children }
                    </LayoutSectionWrapper> :
                    this.props.children
                }
                <Spacer height="48px" />
            </> ) :
            null;
    }
}
