import styled from "../../../styled-components";

interface IGridLayoutProps {
    numberOfFields: number;
    className?: string;
}

/** @internal */
export const GridLayout = styled<IGridLayoutProps, "div">("div")`
    overflow-x: auto;
    display: grid;
    grid-template-columns: auto ${({ numberOfFields }) => {
        if (numberOfFields === 0) {
            return "";
        }
        if (numberOfFields === 1) {
            return "max-content";
        }
        const repeatTimes = numberOfFields - 1;
        return "repeat( " + repeatTimes + ", max-content 1px) max-content";
    }} auto;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .2px;
`;
