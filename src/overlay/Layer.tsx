import styled from "../styled-components";

/**
 * A simple overlay component that renders a centered, elevated Layer
 */
export const Layer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.colors.overlayBg};
    border: 1px solid ${props => props.theme.colors.overlayBorder};
    color: ${props => props.theme.colors.overlayText};
    box-shadow: 0 24px 56px 0 rgba(39, 54, 86, 0.16);
    display: flex;
    flex-direction: column;
`;
