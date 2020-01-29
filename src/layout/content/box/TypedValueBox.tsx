import * as React from "react";
import { Box } from "./Box";
import styled, { css } from "../../../styled-components";

interface ITypedValueBox {
    value?: string;
    type?: string;
    /** Render similarly to a form text input */
    withinForm?: boolean;
}

const StyledBox = styled(Box)`
    font-family: "Roboto Mono", monospace;
`;
const ValueSpan = styled.span`
    margin: 0 8px;
`;
const TypeSpan = styled.span`
    color: ${({theme}) => theme.colors.typedValueBoxTypeText };
    margin: 0 8px;
`;
interface ISizingWrapperProps {
    withinForm?: boolean;
}
const SizingWrapper = styled<ISizingWrapperProps, "div">("div")`
    ${props => props.withinForm ? css`
        min-width: 484px;
    ` : ``}
`;

/**
 * A ValueBox adaptation suitable for displaying statically typed data. Shows the value as well as its type.
 */
export class TypedValueBox extends React.Component<ITypedValueBox> {
    static defaultProps = {
        withinForm: false
    };

    render() {
        const { value, type, withinForm } = this.props;
        let wrapperDivStyle: React.CSSProperties = {};
        if (withinForm) {
            wrapperDivStyle.minWidth = 500;
        }
        return (
            <StyledBox colors={(theme) => ({
                background: theme.colors.typedValueBoxBg,
                text: theme.colors.typedValueBoxText,
                border: withinForm ? theme.colors.typedValueBoxBorder : void 0
            })} metrics={{
                height: 32,
                textPaddingTop: 6,
                textPaddingX: 8,
                fontSize: 14,
                iconSize: 24,
                lineHeight: 20,
                fontWeight: 400,
                letterSpacing: "normal"
            }}>
                <SizingWrapper withinForm={withinForm}>
                    { value ? <ValueSpan>{value}</ValueSpan> : null }
                    { type ? <TypeSpan>{type}</TypeSpan> : null }
                </SizingWrapper>
            </StyledBox>
        );
    }
}
