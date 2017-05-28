import * as React from 'react';
import { TCalculatorConstants } from '../constants/TCalculatorConstants';
import { TCalculatorDisplayResult } from './TCalculatorDisplayResult';
import { TCalculatorFieldsContainer } from './TCalculatorFieldsContainer';
import { TCalculatorOperationsContainer } from './TCalculatorOperationsContainer';

interface ownState {
    operationResult: number,
    operatorsObjList: Array<any>
}

export class TCalculator extends React.Component<any, ownState>{
    constructor() {
        super();
        this.state = {
            operationResult: 0,
            operatorsObjList: [
                {
                    key: 1,
                    value: 0
                },
                {
                    key: 2,
                    value: 0
                }
            ]
        };
        this.handleValueTextInput = this.handleValueTextInput.bind(this);
    }

    handleValueTextInput(key: number, value: number) {
        if (value == null ||
            isNaN(value)) {
            return;
        }

        let values: Array<any> = this.state.operatorsObjList;
        values.map(x => {
            if (x.key == key) {
                x.value = value;
            }
        });

        this.setState({
            operatorsObjList: values
        });
    }

    handleOperationFunc(operationType: number) {
        switch (operationType) {
            case TCalculatorConstants.suma.value:
                this.suma();
                break;
            case TCalculatorConstants.resta.value:
                this.resta();
                break;
            case TCalculatorConstants.multiplicacion.value:
                this.multiplicacion();
                break;
            case TCalculatorConstants.division.value:
                this.division();
                break;
        }
    }

    suma() {
        this.setState({
            operationResult: (this.state.operatorsObjList[0].value + this.state.operatorsObjList[1].value)
        });
    }

    resta() {
        this.setState({
            operationResult: (this.state.operatorsObjList[0].value - this.state.operatorsObjList[1].value)
        });
    }

    multiplicacion() {
        this.setState({
            operationResult: (this.state.operatorsObjList[0].value * this.state.operatorsObjList[1].value)
        });
    }

    division() {
        if (this.state.operatorsObjList[0].value == 0 &&
            this.state.operatorsObjList[0].value == 0) {
            alert("Division by 0");
            return;
        }
        
        this.setState({
            operationResult: (this.state.operatorsObjList[0].value / this.state.operatorsObjList[1].value)
        });
    }

    render() {
        let { operationResult, operatorsObjList } = this.state;

        return (
            <div className="ms-Grid ms-u-fadeIn500 ms-font-m ms-fontSize-l">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-u-sm4 ms-u-smPush4 ms-bgColor-themeSecondary">
                        <div className="ms-u-textAlignCenter ms-fontColor-white ms-fontWeight-semibold TCalculatorHeader">Calculadora</div>
                    </div>
                </div>
                <TCalculatorDisplayResult operationResult={operationResult} />
                <TCalculatorFieldsContainer operatorsObjList={operatorsObjList} onInputTextChanged={this.handleValueTextInput.bind(this)} />
                <TCalculatorOperationsContainer onOperationBtnClicked={this.handleOperationFunc.bind(this)} />
            </div>
        );
    }
}