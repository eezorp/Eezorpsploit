import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Theme from '../styles/theme.json';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
const logo = require('../resources/logo.svg');

const styles = {
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: 0,
        marginTop: 10
    },
    logo: {
        width: 40,
        marginLeft: 10,
        marginRight: 10
    }
};

const selectedItemStyle = {
    borderBottom: '3px solid #FFF'
}

export default class AppHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render = () => {
        let items = this.props.items;
        return (
            <div style={styles.root}>
                <AppBar position="static" style={{ backgroundColor: Theme.primaryColor, marginBottom: 40 }}>
                    <Toolbar style={styles.toolbar}>
                        <Grid container>
                            <Grid item xs={1} />
                            <Grid item xs={10} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <img src={logo} style={styles.logo}/>
                                <Typography variant="headline" color="inherit">EezorpSploit v1.2</Typography>
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
                    </Toolbar>
                    <Toolbar style={{alignItems: 'flex-end', minHeight: 0, marginTop: 10}}>
                        <div style={{ display: 'flex', flex: 1 }}>
                            <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                {
                                    items.map(
                                        i => {
                                            return <Button style={i.isSelected === true ? selectedItemStyle : null} color="inherit" onClick={() => this.props.onNavigate(i.name)}>
                                                {i.logo}
                                                <div style={{ marginRight: 5 }} />
                                                <Typography variant="subheading" color="inherit">{i.name}</Typography>
                                            </Button>
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

