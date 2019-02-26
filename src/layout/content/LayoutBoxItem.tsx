import * as React from "react";
import styled from "../../styled-components";
import { ILayoutRowItemProps } from "./LayoutRowItem";

interface ILayoutBoxItemProps extends ILayoutRowItemProps {
    className?: string;
}

const $LayoutBoxItem: React.StatelessComponent<ILayoutBoxItemProps> = ({ children, className }) => (
    <div className={className}>{children}</div>
);
export const LayoutBoxItem = styled($LayoutBoxItem)`
    display: flex;
    align-items: center;
    /* put this to auto for tx alignment */
    height: ${({autoHeight, baseHeight}) => autoHeight ? "auto" : (baseHeight ? baseHeight + "px" : "48px")};
    padding: 0 8px;
    /* flex: 0 0 auto; put this to 1 1 for tx wrapping */
    flex: ${({autoHeight}) => autoHeight ? "1 1" : "0 0"} auto;
    width: ${props => (props.isBeginningOfRow && !props.autoWidth ? "200px" : "auto")};
    justify-content: ${props => (
        props.justifyContent ? props.justifyContent : (props.isBeginningOfRow ? "flex-end" : "inherit")
    )};

    @media ${props => props.theme.mediaQueries.breakPoints.smallerThanFullView} {
        width: auto;
        min-width: ${props => (props.isBeginningOfRow && !props.autoWidth ? "125px" : "auto")};
    }

    @media ${props => props.theme.mediaQueries.breakPoints.lessThan620px} {
        width: auto;
        min-width: ${props => (props.isBeginningOfRow && !props.autoWidth ? "95px" : "auto")};
    }
`;
