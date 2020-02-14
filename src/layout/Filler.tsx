import styled from "styled-components";

interface IFillerProps {
    className?: string;
}

/** Flex filler element */
export const Filler = styled.div<IFillerProps>`
    flex: 1 0 auto;
`;
