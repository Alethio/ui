import React from "react";
import { storiesOf } from "@storybook/react";
import { ErrorBox } from "./ErrorBox";

storiesOf(ErrorBox.name, module)
  .add("default", () => (
    <ErrorBox>This is an error message</ErrorBox>
  ));
