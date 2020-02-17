import styled from "styled-components";

interface IGridDataProps {
    dataType: string;
    className?: string;
}

/** @internal */
export const GridData = styled.div<IGridDataProps>`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({ dataType }) => dataType === "number" ? "flex-end" : "auto"};
`;
