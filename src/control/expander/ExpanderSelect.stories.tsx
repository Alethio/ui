import React from "react";
import { storiesOf } from "@storybook/react";
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

storiesOf("control/" + ExpanderSelect.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ContentArea]
        }
    })
    .addDecorator(storyFn => <ContentArea>{storyFn()}</ContentArea>)
    .add("ExpanderSelect", () => ([
        <ExpanderSelect label="Closed" open={false} />,
        <ExpanderSelect label="Open" open={true} />,
        <ExpanderSelect label="Disabled" open={false} value={20} locale="en-US" disabled />
    ]))
    .add("ExpanderSelect number", () => ([
        <ExpanderSelect label="Number" value={20} locale="en-US" open={false} />,
        <ExpanderSelect label="Number" value={20} locale="en-US" open={true} />
    ]))
    .add("ExpanderSelect fullwidth", () => ([
        <div style={{ width: 250 }}>
            <ExpanderSelect label="fullWidth" open={false} fullWidth />
        </div>,
        <div style={{ width: 250 }}>
            <ExpanderSelect label="fullWidth" open={true} fullWidth />
        </div>
    ]));
