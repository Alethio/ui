import * as React from "react";
import styled from "../../../styled-components";

const Wrapper = styled.div`
    border-top: 1px solid ${props => props.theme.colors.gridBorder};
    border-bottom: 1px solid ${props => props.theme.colors.gridBorder};
`;

/** @internal */
export const GridWrapper: React.StatelessComponent = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
);
