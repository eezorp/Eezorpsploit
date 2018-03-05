import React, { Component } from 'react';
import ComputerCard, { } from '../components/ComputerCard/ComputerCard';
import { Row, Col } from 'reactstrap';
import ShellcodeCard from '../components/ShellcodeCard';
import Grid from 'material-ui/Grid';
import AddShellcodeCard from '../components/AddShellcodeCard';

const url = "http://localhost:8000/shellcode";

class ShellcodeView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shellcodes: []
        }

        this.getShellCode = this.getShellCode.bind(this);
    }

    componentDidMount() {
        let _this = this;
        fetch(url)
            .then(response => response.json())
            .then(shellcodes => {
                _this.setState({ shellcodes: shellcodes });
            })
    }

    getShellCode(name) {
        let shellcode = this.state.shellcodes.find(s => s.name === name);
        return shellcode;
    }


    render() {
        return (

            <Grid container>
                <AddShellcodeCard />
                {
                    this.state.shellcodes.map(s => {
                        return <ShellcodeCard img={this.props.img} shellcode={s} onGet={this.getShellCode} />
                    })
                }
            </Grid>
        )
    }
}

export default ShellcodeView;
