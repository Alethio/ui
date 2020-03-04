import { InputBase } from "./InputBase";
import styled from "../styled-components";

const $Textarea = InputBase.withComponent("textarea");

export const Textarea = styled($Textarea)`
    min-height: 120px;
    resize: vertical;
`;
