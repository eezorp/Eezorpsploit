import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import Grid from 'material-ui/Grid';

import ClientsView from '../views/ClientsView';
import ShellcodeView from '../views/ShellcodeView';

import ComputerIcon from 'material-ui-icons/Computer'
import CodeIcon from 'material-ui-icons/Code';
import InfoIcon from 'material-ui-icons/InfoOutline';


const computerimg = require('../resources/computer.svg');
const codeimg = require('../resources/code.svg');

const clientsView = <ClientsView img={computerimg} />;
const shellcodeView = <ShellcodeView img={codeimg} />;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: "Clients",
          logo: <ComputerIcon />,
          isSelected: true
        },
        {
          name: "ShellCode",
          logo: <CodeIcon />,
          isSelected: false
        },
        {
          name: "About",
          logo: <InfoIcon/>,
          isSelected: false
        }
      ],

      selectedItem: "Clients"
    }

    this.onNavigate = this.onNavigate.bind(this);
  }

  onNavigate = (name) => {
    let navItems = [...this.state.navItems];
    navItems.forEach(i => {
      let selected = i.name === name;
      i.isSelected = selected;
    });

    this.setState({ selectedItem: name, navItems: navItems });
  }
  getView = (name) => {
    if (name === "Clients")
      return clientsView;
    if (name === "ShellCode")
      return shellcodeView;

    return <div />
  }

  render() {
    let view = this.getView(this.state.selectedItem);

    return (
      <div className="App">
        <AppHeader items={this.state.navItems} onNavigate={this.onNavigate} />

        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Grid container>
              {view}
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    );
  }
}

export default App;
