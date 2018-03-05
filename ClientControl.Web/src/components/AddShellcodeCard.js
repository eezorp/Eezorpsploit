/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Card, { CardContent } from 'material-ui/Card';

//Icons
import AddIcon from 'material-ui-icons/Add';

const styles = {
    card: {
        display: 'flex',
        flex: 1,
        backgroundColor: "#e74c3c"
    },
    details: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
};

class AddShellcodeCard extends React.Component {
    render() {
        let code = this.props.shellcode;

        return (
            <div style={{ margin: 10 }}>
                <Card style={styles.card}>
                    <div style={styles.details}>
                            <AddIcon style={{height: 90, width: 90, fontWeight: 100, padding: 40, color: "#FFF"}}/>
                    </div>

                </Card>
            </div>
        );
    }
}

export default AddShellcodeCard;