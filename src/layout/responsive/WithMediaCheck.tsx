import React from "react";
import { IMediaChecks, useMediaCheck } from "./useMediaCheck";
import { IViewportSize } from "./useViewportSize";

export interface IWithMediaCheckProps {
    children(is: IMediaChecks, actual: IViewportSize): React.ReactElement;
}

/** HOC alternative to useMediaCheck hook */
export const WithMediaCheck: React.FC<IWithMediaCheckProps> = ({ children }) => {
    let [ is, actual ] = useMediaCheck();
    return children(is, actual);
};
