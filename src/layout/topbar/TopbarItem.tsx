import styled from "styled-components";

export const TopbarItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({theme}) => theme.spacing.topbarHeight}px;
    height: ${({theme}) => theme.spacing.topbarHeight}px;
`;
