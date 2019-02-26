import * as React from "react";
import styled from "../../styled-components";
import { NavButton } from "./internal/NavButton";
import { PaginationPrevIcon } from "../../icon/PaginationPrevIcon";
import { PaginationNextIcon } from "../../icon/PaginationNextIcon";
import { Number } from "../../data/Number";
import { SpinnerRegular } from "../../fx/SpinnerRegular";
import { DelayedRender } from "../../util/react/DelayedRender";
import { Cursor } from "./internal/Cursor";
import { ErrorHint } from "../../ErrorHint";

const CursorPaginationRoot = styled.div`
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.sidebarBg};

    & > *:not(:first-child) {
        margin-left: 8px;
    }
`;

const StyledSpinner = styled(SpinnerRegular)`
    margin-top: 0;
`;

export enum LoadStatus {
    NotLoaded,
    Loaded,
    Error
}

export interface ICursorPaginationProps {
    rangeStart: number;
    rangeEnd: number;
    totalItems: number;
    locale: string;
    errorText: string;
    loadStatus?: LoadStatus;
    onNextPage(): void;
    onPrevPage(): void;
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
