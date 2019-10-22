import styled, { css } from "../styled-components";
import Color from "color";

const HEIGHT = 36;
const LINE_HEIGHT = 24;
const BORDER_WIDTH = 1;

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;

    padding: ${(HEIGHT - LINE_HEIGHT - 2 * BORDER_WIDTH) / 2}px 16px;

    font-size: 18px;
    font-weight: 400;
    line-height: ${LINE_HEIGHT}px;

    border-radius: 4px;
    outline: none;
    box-shadow: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    border: ${BORDER_WIDTH}px solid ${({theme, disabled}) => disabled ?
        theme.colors.base.disabled :
        theme.colors.input.border
    };
    background-color: ${({theme}) => theme.colors.input.background};
    color: ${({theme, disabled}) => disabled ? theme.colors.base.disabled : theme.colors.input.text};

    ::placeholder {
        color: ${({theme}) => theme.colors.input.placeholder};
    }

    ::-ms-clear {
        display: none;
    }

    ${props => !props.disabled ? css`
    :active, :focus {
        border-color: ${({theme}) => theme.colors.input.activeBorder};
        box-shadow: 0px 0px 4px ${({theme}) => Color(theme.colors.input.activeBorder).alpha(0.8).string()};
    }
    ` : ``}
`;
