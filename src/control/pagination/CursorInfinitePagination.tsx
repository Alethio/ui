import * as React from "react";
import { NavButton } from "./internal/NavButton";
import { ArrowLeftIcon } from "../../icon/ArrowLeftIcon";
import { ArrowRightIcon } from "../../icon/ArrowRightIcon";
import { Number } from "../../data/Number";
import { DelayedRender } from "../../util/react/DelayedRender";
import { Cursor } from "./internal/Cursor";
import { ErrorHint } from "../../ErrorHint";
import { CursorPaginationRoot } from "./internal/CursorPaginationRoot";
import { StyledSpinner } from "./internal/Spinner";
import { LoadStatus } from "./LoadStatus";
import { ICursorPaginationBaseProps } from "./internal/ICursorPaginationBaseProps";

export interface ICursorInfinitePaginationProps extends ICursorPaginationBaseProps {
    isLastPage: boolean;
}

export class CursorInfinitePagination extends React.Component<ICursorInfinitePaginationProps> {
    static defaultProps = {
        loadStatus: LoadStatus.Loaded
    };

    render() {
        let { rangeStart, rangeEnd, isLastPage: isEndPage, loadStatus, errorText, locale} = this.props;
        let isBusy = loadStatus === LoadStatus.NotLoaded;

        return (
            <CursorPaginationRoot>
                <NavButton
                    Icon={ArrowLeftIcon}
                    disabled={rangeStart === 1 || isBusy}
                    onClick={() => this.props.onPrevPage()} />
                <Cursor>
                    <Number value={rangeStart} locale={locale} />-<Number value={rangeEnd} locale={locale} />
                </Cursor>
                <NavButton
                    Icon={ArrowRightIcon}
                    disabled={isEndPage || isBusy}
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
