/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import * as React from 'react';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Dialog, {
    DialogActions,
    DialogContent,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
const theme = require('../../styles/theme.json');

class ClientDetailsModal extends React.Component {
    render() {
        let client = this.props.client;
        let isMobile = window.isMobile() === true;

        return (
            <div>

                <Dialog
                    open={this.props.isOpen}
                    onClose={this.props.toggle}
                    fullWidth
                >
                    <AppBar position="static" style={{ backgroundColor: theme.primaryColor }}>
                        <Typography style={{padding: 12}} variant="subheading" color="inherit">Client Details</Typography>
                    </AppBar>

                    <DialogContent style={ isMobile === true ? {padding: 0} : null} >
                            <Table>
                                <TableBody>

                                    <TableRow key={0}>
                                        <TableCell>USER</TableCell>
                                        <TableCell numeric>{client.username}</TableCell>
                                    </TableRow>


                                    <TableRow key={1}>
                                        <TableCell>MACHINE</TableCell>
                                        <TableCell numeric>{client.machine_name}</TableCell>
                                    </TableRow>


                                    <TableRow key={2}>
                                        <TableCell>MAC</TableCell>
                                        <TableCell numeric>{client.mac}</TableCell>
                                    </TableRow>


                                    <TableRow key={3}>
                                        <TableCell>SHELLCODE</TableCell>
                                        <TableCell numeric>{client.shellcode !== "" ? "YES" : "NO"}</TableCell>
                                    </TableRow>


                                    <TableRow key={4}>
                                        <TableCell>LAST SEEN</TableCell>
                                        <TableCell numeric>{client.last_update.date} at {client.last_update.time}</TableCell>
                                    </TableRow>

                                    <TableRow key={5}>
                                        <TableCell>IP ADDRESS</TableCell>
                                        <TableCell numeric>{client.ip_address}</TableCell>
                                    </TableRow>

                                    <TableRow key={6}>
                                        <TableCell>OS VERSION</TableCell>
                                        <TableCell numeric>{client.os}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.props.toggle} color="primary">Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ClientDetailsModal;