import styled from "styled-components";
import * as React from "react";

interface ISpacerProps {
    height: string;
    className?: string;
}

const $Spacer: React.StatelessComponent<ISpacerProps> = ({ children, className }) => (
    <div className={className}>{children}</div>
);

/** Vertical spacer */
export const Spacer = styled($Spacer)`
    height: ${props => props.height};
    flex: 0 0 auto;
`;
