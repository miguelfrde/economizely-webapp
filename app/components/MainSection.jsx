import React from 'react';
import muiThemable from 'material-ui/styles/muiThemeable';

const MainSection = (props) => {
  const style = {
    marginLeft: props.muiTheme.navDrawer.width,
    padding: '1rem',
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

MainSection.propTypes = {
  children: React.PropTypes.node.isRequired,
  muiTheme: React.PropTypes.object.isRequired,
};

export default muiThemable()(MainSection);
