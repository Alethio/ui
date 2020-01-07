import React from "react";
import { storiesOf } from "@storybook/react";
import { Expander } from "./Expander";
import styled from "../../styled-components";
import { ExpanderSelect } from "./ExpanderSelect";

const ContentArea = styled.div`
    display: flex;
    background: ${props => props.theme.colors.base.bg.main};
    padding: 8px;
    & > * {
    margin: 8px;
  }
`;

storiesOf("control/" + Expander.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ContentArea]
        }
    })
    .addDecorator(storyFn => <ContentArea>{storyFn()}</ContentArea>)
    .add("default", () => (
        <Expander label="Label" open={false} />
    ))
    .add("open state", () => (
        <Expander label="Label" open={true} />
    ))
    .add("with number", () => (
        <Expander label="Label with number" value={20} locale="en-US" open={false} />
    ))
    .add("number with full width", () => (
        <div style={{ width: 500 }}>
            <Expander label="Label" locale="en-US" value={20} open={false} fullWidth />
        </div>
    ))
    .add("disabled", () => (
        <Expander label="Label" locale="en-US" open={false} disabled />
    ))
    .add("ExpanderSelect", () => ([
        <ExpanderSelect label="Closed" open={false} />,
        <ExpanderSelect label="Open" open={true} />,
        <div style={{ width: 250 }}>
            <ExpanderSelect label="fullWidth" open={false} fullWidth />
        </div>,
        <div style={{ width: 250 }}>
            <ExpanderSelect label="fullWidth" open={true} fullWidth />
        </div>
    ]));
