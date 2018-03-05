/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import * as React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';

class ShellModal extends React.Component {
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

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.isOpen}
                    onClose={this.props.toggle}
                    fullWidth
                >

                    <DialogTitle id="alert-dialog-title">{"Insert ShellCode"}</DialogTitle>

                    <DialogContent>
                        <Input value={this.state.shellcode} onChange={ev => this.setShellCode(ev.target.value)} multiline fullWidth defaultValue="Paste ShellCode in here"></Input>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={() => {
                            this.props.onInsert(this.state.shellcode);
                            this.props.toggle();
                        }} color="primary" autoFocus>Insert</Button>
                        <Button onClick={this.props.toggle} color="primary">Cancel</Button>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ShellModal;