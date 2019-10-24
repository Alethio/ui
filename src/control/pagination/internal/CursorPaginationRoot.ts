import styled from "../../../styled-components";

/** @internal */
export const CursorPaginationRoot = styled.div`
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.sidebarBg};

    & > *:not(:first-child) {
        margin-left: 8px;
    }
`;
