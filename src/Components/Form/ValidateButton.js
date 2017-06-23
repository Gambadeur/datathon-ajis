import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ValidateButton extends Component {
    render() {
        return(
                <RaisedButton
                    type="submit"
                    label="Valider"
                    primary={true}
                    style={{marginTop: 20}}
                    
                />
        )
    }
}
       
       