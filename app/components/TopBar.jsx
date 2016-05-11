import React from 'react';
import {AppBar} from 'material-ui';

const styles = {
  title: {
    cursor: 'pointer',
  },
  bar: {
    position: 'fixed',
    top: 0,
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
        onTitleTouchTap={this.handleTitleTap}
        showMenuIconButton={false}
        title="economizely"
        style={styles.bar}
        titleStyle={styles.title}
        zDepth={1}
      />
    );
  }
}
