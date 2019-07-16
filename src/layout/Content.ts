import styled from "../styled-components";

/** Page content area */
export const Content = styled.div`
    background-color: ${props => props.theme.colors.mainContentBg};
    flex: 1 1 auto;
    padding: ${({theme}) => theme.spacing.contentTop}px 0 ${({theme}) => theme.spacing.contentBottom}px 0;
    min-height: 100vh;
    width: 300px;
    box-sizing: border-box;
`;
