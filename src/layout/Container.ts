import styled, { css } from "../styled-components";

interface IContainerProps {
    zIndex?: number;
}

/** Flex container */
export const Container = styled<IContainerProps, "div">("div")`
    display: flex;
    ${props => props.zIndex !== void 0 ? css`
    position: relative;
    z-index: ${props.zIndex};
    ` : ``}
`;
