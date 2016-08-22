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
  radioButton: {
    checkedColor: indigo500,
  },
});


export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
    location: React.PropTypes.object.isRequired,
    route: React.PropTypes.object,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static childContextTypes = {
    auth: React.PropTypes.object,
  };

  getChildContext() {
    return {
      auth: this.props.route.auth,
    };
  }

  handleSideBarListItemEvent = (event, value) => {
    this.context.router.push(value);
  }

  renderLoggedInContainer() {
    return (
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
  }

  renderLoggedOutContainer() {
    return (
      <div>
        <Title render="Economizely" />
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {this.props.route.auth.loggedIn() ?
          this.renderLoggedInContainer() :
          this.renderLoggedOutContainer()}
      </MuiThemeProvider>
    );
  }
}
