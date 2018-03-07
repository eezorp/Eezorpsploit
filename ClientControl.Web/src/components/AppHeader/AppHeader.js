import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Theme from '../../styles/theme.json';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const logo = require('../../resources/logo.svg');
const styles = {
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: 50,
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
};

export default class AppHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = { setFixed: false }
        this.setFixed = this.setFixed.bind(this);
    }

    componentDidMount() {
        let _this = this;

        window.addEventListener('scroll', () => {
            let supportPageOffset = window.pageXOffset !== undefined;
            let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
            let scroll = {
                x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
                y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
            };

            _this.setFixed(scroll.y > 57)
        }, 200);//ms
    }

    setFixed(val) {
        if (val !== this.state.setFixed)
            this.setState({
                setFixed: val
            });
    }

    render = () => {
        let items = this.props.items;
        return (
            <div style={styles.root}>
                <AppBar position={this.state.setFixed ? "fixed" : "static"} style={{ backgroundColor: Theme.primaryColor, marginBottom: 40, top: 0}}>
                    
                    {this.state.setFixed === false && <Toolbar style={styles.toolbar}>
                        <Grid container>
                            <Grid item xs={1} />
                            <Grid item xs={10} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img src={logo} style={styles.logo} alt={"Could not load"}/>
                                <div style={{display: 'flex'}}>
                                <Typography variant="headline" color="inherit">EezorpSploit </Typography>
                                <Typography style={{marginLeft: 5}} variant="subheading" color="inherit">v1.2</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
                    </Toolbar>}
                    
                    <Toolbar style={{ alignItems: 'flex-end', minHeight: 0, marginTop: 20 }}>
                        <div style={{ display: 'flex', flex: 1 }}>
                            <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                {
                                    items.map(
                                        i => {
                                            return <Button key={i.name} style={i.isSelected === true ? selectedItemStyle : null} color="inherit" onClick={() => this.props.onNavigate(i.name)}>
                                                {i.logo}
                                                {this.props.isMobile !== true && <div style={{ marginRight: 5 }} />}
                                                {this.props.isMobile !== true && <Typography variant="subheading" color="inherit">{i.name}</Typography>}
                                            </Button>
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                {
                    this.state.setFixed && 
                    <div style={{width: '1', height: 163}} />
                }
            </div>
        );
    }
}