import * as React from "react";
import { NavButton } from "./internal/NavButton";
import { PaginationPrevIcon } from "../../icon/PaginationPrevIcon";
import { PaginationNextIcon } from "../../icon/PaginationNextIcon";
import { Number } from "../../data/Number";
import { DelayedRender } from "../../util/react/DelayedRender";
import { Cursor } from "./internal/Cursor";
import { ErrorHint } from "../../ErrorHint";
import { CursorPaginationRoot } from "./internal/CursorPaginationRoot";
import { StyledSpinner } from "./internal/Spinner";
import { LoadStatus } from "./LoadStatus";
import { ICursorPaginationBaseProps } from "./internal/ICursorPaginationBaseProps";

export interface ICursorPaginationProps extends ICursorPaginationBaseProps {
    totalItems: number;
}

export class CursorPagination extends React.Component<ICursorPaginationProps> {
    static defaultProps = {
        loadStatus: LoadStatus.Loaded
    };

    render() {
        let { rangeStart, rangeEnd, totalItems, loadStatus, errorText, locale} = this.props;
        let isBusy = loadStatus === LoadStatus.NotLoaded;

        return (
            <CursorPaginationRoot>
                <NavButton
                    Icon={PaginationPrevIcon}
                    disabled={rangeStart === 1 || isBusy}
                    onClick={() => this.props.onPrevPage()} />
                <Cursor>
                    <Number value={rangeStart} locale={locale} />-<Number value={rangeEnd} locale={locale} />
                    {` / `}
                    <Number value={totalItems} locale={locale} />
                </Cursor>
                <NavButton
                    Icon={PaginationNextIcon}
                    disabled={rangeEnd === totalItems || isBusy}
                    onClick={() => this.props.onNextPage()}
                />
                { isBusy ?
                <DelayedRender delay={1}>
                    <StyledSpinner />
                </DelayedRender>
                : loadStatus === LoadStatus.Error ?
                <ErrorHint>{errorText}</ErrorHint>
                : null }
            </CursorPaginationRoot>
        );
    }
}
