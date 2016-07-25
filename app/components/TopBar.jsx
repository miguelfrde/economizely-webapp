import React from 'react';
import {AppBar} from 'material-ui';


const styles = {
  bar: {
    position: 'fixed',
    top: 0,
  },
};


const TopBar = () => {
  return (
    <AppBar
      showMenuIconButton={false}
      title="economizely"
      style={styles.bar}
      titleStyle={styles.title}
      zDepth={1}
    />
  );
};


export default TopBar;
