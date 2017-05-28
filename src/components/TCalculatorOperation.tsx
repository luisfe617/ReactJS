import * as React from 'react';
import { TCalculatorConstants } from '../constants/TCalculatorConstants';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

interface ownProps {
    operationType: number,
    onOperationBtnClicked: any
}

export class TCalculatorOperation extends React.Component<ownProps, any>{
    constructor() {
        super();
        this.handleOperationFunc = this.handleOperationFunc.bind(this);
    }

    handleOperationFunc() {
        this.props.onOperationBtnClicked(this.props.operationType)
    }

    render() {
        let { operationType } = this.props;
        let btnDisplayOpt, btnDisplayIcon: string = "";

        switch (operationType) {
            case TCalculatorConstants.suma.value:
                btnDisplayIcon = TCalculatorConstants.suma.icon;
                break;
            case TCalculatorConstants.resta.value:
                btnDisplayIcon = TCalculatorConstants.resta.icon;
                break;
            case TCalculatorConstants.multiplicacion.value:
                btnDisplayIcon = TCalculatorConstants.multiplicacion.icon;
                break;
            case TCalculatorConstants.division.value:
                btnDisplayIcon = TCalculatorConstants.division.icon;
                break;
        }

        return (
            <div className='ms-BasicButtonsExample' style={{ display: 'inline' }}>
                <PrimaryButton iconProps={{ iconName: btnDisplayIcon }} onClick={this.handleOperationFunc.bind(this)} />
            </div>
        );
    }
}