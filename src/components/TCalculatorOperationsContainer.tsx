import * as React from 'react';
import { TCalculatorConstants } from '../constants/TCalculatorConstants';
import { TCalculatorOperation } from './TCalculatorOperation';

interface ownProps {
    onOperationBtnClicked: any
}

export class TCalculatorOperationsContainer extends React.Component<ownProps, any>{
    constructor() {
        super();
        this.handleOperationFunc = this.handleOperationFunc.bind(this);
    }

    handleOperationFunc(operationType: number) {
        this.props.onOperationBtnClicked(operationType);
    }

    render() {
        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm4 ms-u-smPush4">
                    <div className="ms-u-textAlignCenter TCalculatorRowComponent">
                        <TCalculatorOperation onOperationBtnClicked={this.handleOperationFunc.bind(this)} operationType={TCalculatorConstants.suma.value} />
                        <TCalculatorOperation onOperationBtnClicked={this.handleOperationFunc.bind(this)} operationType={TCalculatorConstants.resta.value} />
                        <TCalculatorOperation onOperationBtnClicked={this.handleOperationFunc.bind(this)} operationType={TCalculatorConstants.multiplicacion.value} />
                        <TCalculatorOperation onOperationBtnClicked={this.handleOperationFunc.bind(this)} operationType={TCalculatorConstants.division.value} />
                    </div>
                </div>
            </div>
        );
    }
}