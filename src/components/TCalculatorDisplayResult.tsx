import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

interface ownProps {
    operationResult: number
}

export class TCalculatorDisplayResult extends React.Component<ownProps, any>{
    constructor() {
        super();
    }
    
    render() {
        let { operationResult } = this.props;

        return (
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm2 ms-u-smPush5">
                    <div className="ms-u-textAlignCenter ms-font-xl ms-fontSize-xl ms-fontWeight-semibold">
                        <TextField label='Result' type="number" value={operationResult.toString()} readOnly />
                    </div>
                </div>
            </div>
        )
    }
}