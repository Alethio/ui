import { useState, useEffect } from "react";

export interface IViewportSize {
    height: number;
    width: number;
}

export const useViewportSize = () => {
    let [ viewportSize, setViewportSize ] = useState<IViewportSize>(() => computeViewportSize());

    useEffect(() => {
        let onResize = () => setViewportSize(computeViewportSize());
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return viewportSize;
};

const computeViewportSize = (): IViewportSize => ({
    width: window.innerWidth,
    height: window.innerHeight
});
