import React from 'react';
import {FloatingActionButton} from 'material-ui';
import {ContentAdd} from 'material-ui/svg-icons';
import {ActivityTable} from '../components';
import muiThemable from 'material-ui/styles/muiThemeable';
import {zIndex} from 'material-ui/styles';


const Activity = (props) => {
  const styles = {
    addButton: {
      position: 'fixed',
      top: props.muiTheme.appBar.height / 2,
      right: '1rem',
      zIndex: zIndex.appBar + 100,
    },
  };

  return (
    <div>
      <FloatingActionButton secondary style={styles.addButton}>
        <ContentAdd />
      </FloatingActionButton>
      <ActivityTable />
    </div>
  );
};

Activity.propTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default muiThemable()(Activity);
