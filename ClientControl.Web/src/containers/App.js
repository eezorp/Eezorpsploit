import React, { Component } from 'react';
import AppHeader from '../components/AppHeader';
import Grid from 'material-ui/Grid';

import ClientsView from '../views/ClientsView';
import ShellcodeView from '../views/ShellcodeView';

import ComputerLogo from 'material-ui-icons/Computer'
import Code from 'material-ui-icons/Code';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: "Clients",
          logo: <ComputerLogo />,
          isSelected: true
        },
        {
          name: "ShellCode",
          logo: <Code />,
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

    this.setState({selectedItem: name, navItems: navItems});
  }
  getView = (name) => {
    if (name === "Clients")
      return <ClientsView />
    if (name === "ShellCode")
      return <ShellcodeView />

    return <div />
  }

  render() {
    let view = this.getView(this.state.selectedItem);

    return (
      <div className="App">
        <AppHeader items={this.state.navItems} onNavigate={this.onNavigate} />

        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Grid container>
              {view}
            </Grid>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default App;
