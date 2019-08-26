import styled from "../../../styled-components";

export const UserProfileMenuItem = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    text-align: right;
    &:hover {
        background-color: ${({theme}) => theme.colors.base.bg.main};
    }
`;
