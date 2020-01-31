import styled from "../../../styled-components";

const BORDER_SIZE = 1;

/** @internal */
export const Cursor = styled.div`
    border-radius: ${props => props.theme.spacing.borderRadius.thin}px;
    border: ${BORDER_SIZE}px solid ${props => props.theme.colors.paginationBtnBorder};
    background-color: ${props => props.theme.colors.paginationBtnBg};
    box-sizing: border-box;
    user-select: none;
    padding: ${10 - BORDER_SIZE}px ${20 - BORDER_SIZE}px ${12 - BORDER_SIZE}px ${20 - BORDER_SIZE}px;
    color: ${props => props.theme.colors.paginationCursorText};
    font-size: 12px;
    line-height: 14px;
    font-weight: ${props => props.theme.font.weight.regular};
    text-align: center;
    min-width: ${36 - 2 * BORDER_SIZE}px;
`;
