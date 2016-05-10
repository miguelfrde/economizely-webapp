import React from 'react';
import {AppBar, FlatButton} from 'material-ui';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

export default class TopBar extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  handleTitleTap = () => {
    this.context.router.push('/');
  }

  render() {
    return (
      <AppBar
        iconElementRight={<FlatButton label="Logout" />}
        onTitleTouchTap={this.handleTitleTap}
        showMenuIconButton={false}
        title={<span style={styles.title}>economizely</span>}
        zDepth={1}
      />
    );
  }
}
