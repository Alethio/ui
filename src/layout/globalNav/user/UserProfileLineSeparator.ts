import styled from "../../../styled-components";
import { LineSeparator } from "../../LineSeparator";

export const UserProfileLineSeparator = styled(LineSeparator)`
    border-top: 1px solid ${({theme}) => theme.colors.separator};
`;
