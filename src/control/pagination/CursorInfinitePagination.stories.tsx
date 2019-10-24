import React from "react";
import { storiesOf } from "@storybook/react";
import { CursorInfinitePagination } from "./CursorInfinitePagination";
import { LoadStatus } from "./LoadStatus";

storiesOf("control/pagination/" + CursorInfinitePagination.name, module)
    .add("default", () => (
        <CursorInfinitePagination
            errorText="An error has occurred"
            loadStatus={LoadStatus.Loaded}
            isLastPage={false}
            rangeStart={10000}
            rangeEnd={10050}
            locale="en-US"
            onNextPage={() => { /** noop */}}
            onPrevPage={() => { /** noop */}}
        />
    ))
    .add("loading state", () => (
        <CursorInfinitePagination
            errorText="An error has occurred"
            loadStatus={LoadStatus.NotLoaded}
            isLastPage={false}
            rangeStart={10000}
            rangeEnd={10050}
            locale="en-US"
            onNextPage={() => { /** noop */}}
            onPrevPage={() => { /** noop */}}
        />
    ))
    .add("error state", () => (
        <CursorInfinitePagination
            errorText="An error has occurred"
            loadStatus={LoadStatus.Error}
            isLastPage={false}
            rangeStart={10000}
            rangeEnd={10050}
            locale="en-US"
            onNextPage={() => { /** noop */}}
            onPrevPage={() => { /** noop */}}
        />
    ));
