import React from "react";
import { WithFormState } from "./WithFormState";
import { Button } from "../control/Button";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { SpinnerLite } from "../fx/SpinnerLite";

@observer
export class SubmitButton extends React.Component<{ children: string; }> {
    @observable
    private isClient = false;

    componentDidMount() {
        this.isClient = true;
    }

    render() {
        let { children } = this.props;
        let isClient = this.isClient;

        return <WithFormState<unknown>>
            { ({ isSubmitting }) =>
                <Button type="submit" colors="primary"
                    Icon={isSubmitting || !isClient ? SpinnerLite : void 0}
                    disabled={isSubmitting || !isClient}
                >
                    { children }
                </Button>
            }
        </WithFormState>;
    }
}
