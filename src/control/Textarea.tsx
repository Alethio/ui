import { Input } from "./Input";
import styled from "../styled-components";

const $Textarea = Input.withComponent("textarea");

export const Textarea = styled($Textarea)`
    min-height: 120px;
    resize: vertical;
`;
