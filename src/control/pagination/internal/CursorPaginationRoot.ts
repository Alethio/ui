import styled from "styled-components";

/** @internal */
export const CursorPaginationRoot = styled.div`
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.base.bg.alt};

    & > *:not(:first-child) {
        margin-left: 8px;
    }
`;
