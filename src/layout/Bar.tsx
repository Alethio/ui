import styled from "../styled-components";

export interface IBarProps {
    sticky?: boolean;
    zIndex?: number;
}

export const Bar = styled<IBarProps, "div">("div")`
    box-sizing: border-box;
    display: flex;
    background-color: ${props => props.theme.colors.base.bg.alt};
    z-index: ${props => props.zIndex};
`;
