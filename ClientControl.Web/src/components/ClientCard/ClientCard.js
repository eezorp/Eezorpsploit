import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

//Icons
import CodeIcon from 'material-ui-icons/Code';
import StopIcon from 'material-ui-icons/Stop';
import InfoIcon from 'material-ui-icons/InfoOutline';

import Functions from './Functions';
import AssignShellCodeModal from '../AssignShellCodeModal/AssignShellCodeModal';
import ClientDetailsModal from '../ClientDetailsModal/ClientDetailsModal';


const functions = new Functions();
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
    },
    cover: {
        width: 100,
        height: 140,
        padding: 10,
        marginRight: 10
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 5,
        paddingBottom: 5,
    },
    icon: {
        height: 26,
        width: 26,
    }
};

class ClientCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = functions.getInitialState();
        this.toggle = functions.toggle.bind(this);
        this.isClientOnline = functions.isClientOnline.bind(this);
        this.setShellCode = functions.setShellCode.bind(this);
        this.getDateTime = functions.getDateTime.bind(this);
        this.toggleInfo = functions.toggleInfo.bind(this);
    }

    shouldComponentUpdate() {
        return this.state.showModal !== true;
    }

    render() {
        let client = this.props.client;
        let isOnline = this.isClientOnline();
        let hasCodeSet = client.shellcode !== "";

        return (
            <div style={{margin: 10}}>
                <AssignShellCodeModal shellcode={client.shellcode} isOpen={this.state.showModal} toggle={this.toggle} onInsert={this.setShellCode} />
                <ClientDetailsModal isOpen={this.state.showInfoModal} toggle={this.toggleInfo} client={client} />
                
                <Card raised style={styles.card}>
                    <div style={styles.details}>
                        <CardContent style={styles.content}>
                            <Typography variant="headline">{client.username}</Typography>
                            <Typography variant="subheading" color="textSecondary" style={{marginBottom: 5}}>
                                {client.machine_name}
                            </Typography>

                            <Typography variant="subheading" style={isOnline ? { color: "#2ecc71" } : { color: "#e74c3c" }}>
                                {
                                    isOnline === true
                                        ? "ONLINE"
                                        : "OFFLINE"

                                }
                            </Typography>

                            <Typography variant="subheading" style={hasCodeSet ? { color: "#2ecc71" } : { color: "#e74c3c" }}>
                                {
                                    hasCodeSet === true
                                        ? "CODE READY"
                                        : "NO CODE"

                                }
                            </Typography>

                        </CardContent>
                        <div style={styles.controls}>
                            <IconButton disabled={hasCodeSet === false} onClick={() => {
                                this.setShellCode("");
                                //close the window
                                this.props.onAbort();
                            }}>
                                <StopIcon style={styles.icon} />
                            </IconButton>
                            <IconButton disabled={hasCodeSet === true} onClick={() => this.toggle()}>
                                <CodeIcon style={styles.icon} />
                            </IconButton>
                            <IconButton aria-label="Next" onClick={()=>this.toggleInfo()}>
                                <InfoIcon style={styles.icon} />
                            </IconButton>
                        </div>
                    </div>
                    <img
                        style={styles.cover}
                        src={this.props.img}
                        alt={"Could not load"}
                    />
                </Card>
            </div>
        );
    }
}

export default ClientCard;