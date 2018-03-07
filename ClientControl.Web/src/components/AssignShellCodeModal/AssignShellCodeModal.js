/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import * as React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
} from 'material-ui/Dialog';

import Input from 'material-ui/Input';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';


const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
    root: {
        flexGrow: 1,
        marginTop: 12,
    },
};

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}


class AssignShellCodeModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shellcode: ""
        }
    }

    setShellCode(code) {
        this.setState({ shellcode: code });
    }

    componentDidMount() {
        this.setState({ shellcode: this.props.shellcode });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ shellcode: this.props.shellcode });
    }

    renderCustomView() {
        return (<div>
            <Typography variant="subheading">Custom shellcode</Typography>
            <DialogContent>
                <Input value={this.state.shellcode} onChange={ev => this.setShellCode(ev.target.value)} multiline fullWidth defaultValue="Paste ShellCode in here"></Input>
            </DialogContent>
        </div>
        );
    }

    renderTemplateView() {
        return (<div>
            <Typography variant="subheading">Select from template</Typography>
            <DialogContent>
            </DialogContent>
        </div>);
    }

    render() {
        let value = 0;
        return (
            <div>
                <Dialog
                    open={this.props.isOpen}
                    onClose={this.props.toggle}
                    fullWidth>

                    <div className={styles.root}>
                        <AppBar position="static">
                            <Tabs value={value} onChange={this.handleChange}>
                                <Tab label="Custom" />
                                <Tab label="Shellcodes" />
                            </Tabs>
                        </AppBar>
                        {value === 0 &&
                            <TabContainer>
                                {this.renderCustomView()}
                            </TabContainer>}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                    </div>


                    <DialogActions>
                        <Button key={1} onClick={() => {
                            this.props.onInsert(this.state.shellcode);
                            this.props.toggle();
                        }} color="primary" autoFocus>Insert</Button>
                        <Button key={2} onClick={this.props.toggle} color="primary">Cancel</Button>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AssignShellCodeModal;