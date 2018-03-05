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
import EditIcon from 'material-ui-icons/Edit';
import StopIcon from 'material-ui-icons/Stop';

import DeleteIcon from 'material-ui-icons/Delete';
import InfoIcon from 'material-ui-icons/InfoOutline';

const styles = {
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        height: 100,
        padding: 10,
        marginRight: 10
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 5,
        paddingBottom: 5,
    },
    icon: {
        height: 26,
        width: 26,
    }
};

class ShellcodeCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedName: ""
        }
    }

    render() {
        let code = this.props.shellcode;

        return (
            <div style={{ margin: 10 }}>
                <Card style={styles.card}>
                    <div style={styles.details}>
                        <CardContent style={styles.content}>
                            <Typography variant="headline">{code.name}</Typography>
                            <Typography variant="subheading" color="textSecondary" style={{ marginBottom: 5 }}>
                                {code.description}
                            </Typography>

                            <Typography variant="subheading">
                               {code.name}
                            </Typography>

                        </CardContent>
                        <div style={styles.controls}>
                            <IconButton >
                                <DeleteIcon style={styles.icon} />
                            </IconButton>
                            <IconButton>
                                <EditIcon style={styles.icon} />
                            </IconButton>
                            <IconButton>
                                <InfoIcon style={styles.icon} />
                            </IconButton>
                        </div>
                    </div>
                    <img
                        style={styles.cover}
                        src={this.props.img}
                    />
                </Card>
            </div>
        );
    }
}

export default ShellcodeCard;