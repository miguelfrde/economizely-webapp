import React from 'react';
import Title from 'react-title-component';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo500} from 'material-ui/styles/colors';
import TopBar from '../components/TopBar.jsx';
import SideBar from '../components/SideBar.jsx';
import MainSection from '../components/MainSection.jsx';

const muiTheme = getMuiTheme({
  appBar: {
    color: indigo500,
  },
});


export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    location: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  handleSideBarListItemEvent = (event, value) => {
    this.context.router.push(value);
  }

  render() {
    const app = (
      <div>
        <Title render="Economizely" />
        <TopBar />
        <SideBar
          location={this.props.location}
          onListItemSelect={this.handleSideBarListItemEvent}
        />
        <MainSection>
          {this.props.children}
        </MainSection>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {app}
      </MuiThemeProvider>
    );
  }
}
