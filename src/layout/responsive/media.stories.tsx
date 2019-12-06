import React from "react";
import { storiesOf } from "@storybook/react";
import { WithMediaCheck } from "./WithMediaCheck";
import { useMediaCheck } from "./useMediaCheck";

const ExampleWithHook: React.FC = () => {
    let [ is, actual ] = useMediaCheck();

    if (is.sAndAbove) {
        return <div>We're on a device size S+ ({
            is.sExact ? "exactly S" : "above S"}, actual size: {actual.width})</div>;
    } else {
        return <div>We're on a device size XS (actual size: {actual.width})</div>;
    }
};

storiesOf("layout/responsive/mediaChecks", module)
    .add("useMediaCheck (hook)", () => (
        <ExampleWithHook />
    ))
    .add(WithMediaCheck.displayName!, () => (
        <WithMediaCheck>{(is, actual) => {
            if (is.sAndAbove) {
                return <div>We're on a device size S+ ({
                    is.sExact ? "exactly S" : "above S"}, actual size: {actual.width})</div>;
            } else {
                return <div>We're on a device size XS (actual size: {actual.width})</div>;
            }
        }}</WithMediaCheck>
    ));
