import * as React from "react";

interface IErrorBoundaryProps {
    errorEl: React.ReactNode;
    logger: ILogger;
}

interface ILogger {
    error(error: Error, context: any): void;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.props.logger.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.errorEl;
        }

        return this.props.children;
    }
}
