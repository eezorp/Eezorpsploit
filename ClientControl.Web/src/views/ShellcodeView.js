import React, { Component } from 'react';
import ShellcodeCard from '../components/ShellcodeCard';
import Grid from 'material-ui/Grid';
import Loader from '../components/Loader';
import AddShellcodeCard from '../components/AddShellcodeCard';
import { getShellCodes } from '../api/API';

class ShellcodeView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shellcodes: [],
            isLoading: false
        };

        this.getShellCode = this.getShellCode.bind(this);
    }

    componentDidMount() {
        let _this = this;
        this.setState({ isLoading: true });
        //API
        getShellCodes()
            .then(shellcodes => {
                _this.setState({ shellcodes: shellcodes, isLoading: false });
            });
    }

    getShellCode(name) {
        let shellcode = this.state.shellcodes.find(s => s.name === name);
        return shellcode;
    }


    render() {
        return (
            <Grid container>
                {
                    this.state.isLoading === true
                        ?
                        <Loader />
                        :
                        <Grid container>
                            <AddShellcodeCard />
                            {
                                this.state.shellcodes.map(s => {
                                    return <ShellcodeCard img={this.props.img} shellcode={s} onGet={this.getShellCode} />
                                })
                            }
                        </Grid>
                }
            </Grid>
        )
    }
}

export default ShellcodeView;
