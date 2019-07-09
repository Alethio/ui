import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from "./Grid";
import { GridFields, IGridField } from "./state/GridFields";
import { ShortDateRenderer } from "../../data/gridRenderer/ShortDateRenderer";
import { GridSortingOptions } from "./state/GridSortingOptions";
import { NumberRenderer } from "../../data/gridRenderer/NumberRenderer";

interface ISampleData {
    name: string;
    value: number;
    createdAt: Date;
}

class MyGridFields extends GridFields<ISampleData> {
    protected fields: IGridField<ISampleData>[] = [{
        fieldKey: "name",
        getFieldValue: d => d.name,
        isSortable: true,
        label: "Name",
        selected: true,
        type: "string"
    }, {
        fieldKey: "value",
        getFieldValue: d => d.value,
        isSortable: true,
        label: "Value",
        selected: true,
        type: "number",
        renderer: new NumberRenderer("en-US", d => d.value)
    }, {
        fieldKey: "createdAt",
        getFieldValue: d => d.createdAt.getTime(),
        isSortable: true,
        label: "Created at",
        selected: true,
        type: "number",
        renderer: new ShortDateRenderer("en-US", d => d.createdAt.getTime() / 1000)
    }];
}

storiesOf("control/" + Grid.name, module)
    .add("default", () => (
        <Grid<ISampleData>
            fields={new MyGridFields()}
            loadMoreText="Load more"
            noDataText="No data to show"
            sortingOptions={new GridSortingOptions()}
            rows={[
                { key: "hash1", data: { name: "First item", value: 25000, createdAt: new Date() } },
                { key: "hash2", data: { name: "Second item", value: 3500, createdAt: new Date() } },
                { key: "hash3", data: { name: "Third item", value: 370, createdAt: new Date() } },
                { key: "hash4", data: { name: "Fourth item", value: 970, createdAt: new Date() } }
            ]}
        />
    ))
    .add("limit visible rows", () => (
        <Grid<ISampleData>
            fields={new MyGridFields()}
            loadMoreText="Load more"
            noDataText="No data to show"
            sortingOptions={new GridSortingOptions()}
            maxVisibleRows={3}
            rows={[
                { key: "hash1", data: { name: "First item", value: 25000, createdAt: new Date() } },
                { key: "hash2", data: { name: "Second item", value: 3500, createdAt: new Date() } },
                { key: "hash3", data: { name: "Third item", value: 370, createdAt: new Date() } },
                { key: "hash4", data: { name: "Fourth item", value: 970, createdAt: new Date() } }
            ]}
        />
    ))
    .add("empty", () => (
        <Grid<ISampleData>
            fields={new MyGridFields()}
            loadMoreText="Load more"
            noDataText="No data to show"
            sortingOptions={new GridSortingOptions()}
            rows={[]}
        />
    ));
