import styled from "styled-components";

/**
 * An element that blocks the viewport, useful for modals
 */
export const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, .95);
`;
