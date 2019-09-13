import styled from "../styled-components";

export const LineSeparator = styled.hr`
    border: none;
    border-top: 1px dotted ${({theme}) => theme.colors.separator};
`;
