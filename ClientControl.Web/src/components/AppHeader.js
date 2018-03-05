import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Theme from '../styles/theme.json';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
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
                    <Toolbar>
                        <Typography variant="title" color="inherit">EezorpSploit</Typography>
                        <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                            {
                                items.map(
                                    i => {
                                        return <Button style={ i.isSelected === true ? selectedItemStyle : null} color="inherit" onClick={() => this.props.onNavigate(i.name)}>
                                            {i.logo}
                                            <div style={{ marginRight: 5 }} />
                                            {i.name}
                                        </Button>
                                    }
                                )
                            }
                        </div>
                        <Typography variant="title" color="inherit">v1.2</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

