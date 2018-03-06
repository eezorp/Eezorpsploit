/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import * as React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Input from 'material-ui/Input';

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

export default ShellModal;