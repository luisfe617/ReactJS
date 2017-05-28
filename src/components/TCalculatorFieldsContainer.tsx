import * as React from 'react';
import { TCalculatorInputFields } from './TCalculatorInputFields';

interface ownProps {
    operatorsObjList: Array<any>,
    onInputTextChanged: any
}

export class TCalculatorFieldsContainer extends React.Component<ownProps, any>{
    constructor() {
        super();
        this.handleValueTextInput = this.handleValueTextInput.bind(this);
    }

    handleValueTextInput(key: number, value: number) {
        this.props.onInputTextChanged(key, value);
    }

    render() {
        let { operatorsObjList } = this.props;

        let operatorRows = [];
        operatorsObjList.forEach(element => {
            operatorRows.push(<TCalculatorInputFields key={element.key} keyNum={element.key} value={element.value} onInputTextChanged={this.handleValueTextInput.bind(this)} />);
        });

        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm2 ms-u-smPush5">
                    <div className="ms-u-textAlignCenter">
                        {operatorRows}
                    </div>
                </div>
            </div>
        );
    }
}