/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import * as React from 'react';
import Typography from 'material-ui/Typography/Typography';
import IconButton from 'material-ui/IconButton';
import Card, { CardContent } from 'material-ui/Card';

//Icons
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import InfoIcon from 'material-ui-icons/InfoOutline';
import Grid from 'material-ui/Grid';
const theme = require('../../styles/theme.json');

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
        padding: 10
    },
    cover: {
        height: 100,
        marginTop: 5
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 5,
        paddingBottom: 5,
        backgroundColor: theme.primaryColor
    },
    icon: {
        height: 26,
        width: 26,
        color: "#FFF"
    }
};

class ShellCodeCard extends React.Component {
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
                <Card raised style={styles.card}>
                    <Grid container>

                        <Grid item xs={12} sm={12} md={5} style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img
                                style={styles.cover}
                                src={this.props.img}
                                alt={"Could not load"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={7}>
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
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div style={styles.details}>
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
                        </Grid>
                    </Grid >
                </Card>
            </div>
        );
    }
}

export default ShellCodeCard;