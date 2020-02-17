import styled from "styled-components";

export const Label = styled.label`
    font-size: 12px;
    color: ${props => props.theme.colors.label.default};
    font-weight: ${props => props.theme.font.weight.semibold};
    text-transform: uppercase;
`;
