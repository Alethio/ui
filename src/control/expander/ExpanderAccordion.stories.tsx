import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { ExpanderAccordion } from "./ExpanderAccordion";

const ContentArea = styled.div`
    display: flex;
    background: ${props => props.theme.colors.base.bg.main};
    padding: 8px;
    & > * {
    margin: 8px;
  }
`;

storiesOf("control/" + ExpanderAccordion.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ContentArea]
        }
    })
    .addDecorator(storyFn => <ContentArea>{storyFn()}</ContentArea>)
    .add("ExpanderAccordion", () => ([
        <ExpanderAccordion label="Closed" open={false} />,
        <ExpanderAccordion label="Open" open={true} />,
        <ExpanderAccordion label="Disabled" open={false} value={20} locale="en-US" disabled />
    ]))
    .add("ExpanderAccordion number", () => ([
        <ExpanderAccordion label="Number" value={20} locale="en-US" open={false} />,
        <ExpanderAccordion label="Number" value={20} locale="en-US" open={true} />
    ]))
    .add("ExpanderAccordion fullwidth", () => ([
        <div style={{ width: 250 }}>
            <ExpanderAccordion label="fullWidth" open={false} fullWidth />
        </div>,
        <div style={{ width: 250 }}>
            <ExpanderAccordion label="fullWidth" open={true} fullWidth />
        </div>
    ]));
