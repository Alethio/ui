import React from "react";
import { storiesOf } from "@storybook/react";
import { CursorPagination, LoadStatus } from "./CursorPagination";

storiesOf("control/pagination/" + CursorPagination.name, module)
    .add("default", () => (
        <CursorPagination
            errorText="An error has occurred"
            loadStatus={LoadStatus.Loaded}
            totalItems={20000}
            rangeStart={10000}
            rangeEnd={10050}
            locale="en-US"
            onNextPage={() => { /** noop */}}
            onPrevPage={() => { /** noop */}}
        />
    ))
    .add("loading state", () => (
        <CursorPagination
            errorText="An error has occurred"
            loadStatus={LoadStatus.NotLoaded}
            totalItems={20000}
            rangeStart={10000}
            rangeEnd={10050}
            locale="en-US"
            onNextPage={() => { /** noop */}}
            onPrevPage={() => { /** noop */}}
        />
    ))
    .add("error state", () => (
        <CursorPagination
            errorText="An error has occurred"
            loadStatus={LoadStatus.Error}
            totalItems={20000}
            rangeStart={10000}
            rangeEnd={10050}
            locale="en-US"
            onNextPage={() => { /** noop */}}
            onPrevPage={() => { /** noop */}}
        />
    ));
