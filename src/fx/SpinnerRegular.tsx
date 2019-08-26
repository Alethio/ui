import * as React from "react";
import { Spinner } from "./Spinner";
import styled, { withTheme } from "../styled-components";
import { ITheme } from "../theme/ITheme";

const StyledSpinner = styled(Spinner)`
    margin-top: 2px;
`;

export interface ISpinnerRegularProps {
    size?: number;
    theme: ITheme;
}

class $SpinnerRegular extends React.Component<ISpinnerRegularProps> {
    static defaultProps = {
        size: 24
    };

    render() {
        let { theme, size } = this.props;

        return (
            <StyledSpinner size={size!}
                borderColor={theme.colors.spinnerBorder}
                color={theme.colors.spinnerStroke}
                backgroundColor={theme.colors.spinnerBackground}
            />
        );
    }
}

/**
 * Drop-in spinner component with default styling
 */
export const SpinnerRegular = withTheme($SpinnerRegular);
