import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

interface ownProps {
    key: string,
    keyNum: number,
    value: number,
    onInputTextChanged: any
}

export class TCalculatorInputFields extends React.Component<ownProps, any>{
    constructor() {
        super();
        this.handleValueTextInput = this.handleValueTextInput.bind(this);
    }

    handleValueTextInput(value: string) {
        this.props.onInputTextChanged(this.props.keyNum, parseInt(value));
    }

    render() {
        let { keyNum, value } = this.props;
        let textFieldLabel: string = "Number " + keyNum;

        return (
            <TextField type="number" label={textFieldLabel} value={value.toString()} onChanged={this.handleValueTextInput.bind(this)} pattern="-?(\d+|\d+\.\d+|\.\d+)([eE][-+]?\d+)?" />
        );
    }
}