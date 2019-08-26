import styled from "../../../styled-components";

export const UserProfileDetails = styled.div`
    padding: 8px 16px;
    text-align: right;
`;
export const UserProfileDetailsEmail = styled.div`
    font-weight: 500;
    font-size: 18px;
`;
export const UserProfileDetailsPlan = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.colors.base.secondary.color};
`;
