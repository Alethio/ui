import styled from "../../styled-components";

export enum MinimumWidth {
    ForFullView = 900,
    ForStandardView = 780
}

interface IResponsiveContainerProps {
    behavior: "hide" | "show";
    forScreenWidth: {
        lowerThan?: number;
        greaterThan?: number;
    };
}

export const ResponsiveContainer = styled<IResponsiveContainerProps, "div">("div")`
    display: ${props => props.behavior === "hide" ? "block" : "none" };
    ${props => {
        let mediaQ = "@media only screen ";
        if (props.forScreenWidth.lowerThan) {
            mediaQ += "and (max-width: " + props.forScreenWidth.lowerThan + "px)";
        }
        if (props.forScreenWidth.greaterThan) {
            mediaQ += "and (min-width: " + props.forScreenWidth.greaterThan + "px)";
        }
        return mediaQ;
    }} {
        display: ${props => props.behavior === "hide" ? "none" : "block" };
    }
`;
