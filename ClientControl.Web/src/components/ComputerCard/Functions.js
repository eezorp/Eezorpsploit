import { setShellcode } from '../../api/API';

export default class Functions {
    getInitialState() {
        return {
            showModal: false,
            showInfoModal: false
        }
    }
    toggle() {
        this.setState({ showModal: !this.state.showModal });
        this.forceUpdate();
    }

    toggleInfo() {
        this.setState({ showInfoModal: !this.state.showInfoModal });
        this.forceUpdate();
    }

    getDateTime() {
        let myDate = new Date();
        let time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + ":" + myDate.getMilliseconds();
        let date = (myDate.getMonth() + 1) + "-" + myDate.getDate() + "-" + myDate.getFullYear();

        return {
            date: date,
            time: time
        };
    }

    isClientOnline() {

        let clientDate = this.props.client.last_update;
        let now = this.getDateTime();


        let dNow = new Date(now.date + " " + now.time);
        let dClient = new Date(clientDate.date + " " + clientDate.time);

        var diffMs = (dClient - dNow); // milliseconds between now & Christmas
        var diffDays = Math.floor(diffMs / 86400000); // days
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

        return diffMins > -1;
    }

    setShellCode(shellcode) {
        let _this = this;

        setShellcode(this.props.client.mac, shellcode)
            .then(() => {
                _this.props.onSet(this.props.client, shellcode);
                _this.forceUpdate();
            });
    }

}