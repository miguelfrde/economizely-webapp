import React from 'react';
import {RaisedButton} from 'material-ui';
import {ActionBackup} from 'material-ui/svg-icons';

const styles = {
  container: {
    marginTop: '1rem',
  },
};

const EmptyActivityTableMessage = () => {
  return (
    <div style={styles.container}>
      <p>There are no activity items saved yet.</p>
      <RaisedButton
        label="Upload CSV"
        icon={<ActionBackup />}
        secondary
      />
    </div>
  );
};

export default EmptyActivityTableMessage;
