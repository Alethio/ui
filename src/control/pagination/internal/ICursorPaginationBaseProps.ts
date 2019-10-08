import { LoadStatus } from "../LoadStatus";

export interface ICursorPaginationBaseProps {
    rangeStart: number;
    rangeEnd: number;
    locale: string;
    errorText: string;
    loadStatus?: LoadStatus;
    onNextPage(): void;
    onPrevPage(): void;
}
