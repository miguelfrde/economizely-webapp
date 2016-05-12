import React from 'react';
import {FloatingActionButton} from 'material-ui';
import {ContentAdd} from 'material-ui/svg-icons';
import {ActivityTable, AddActivityItemModal} from '../components';
import muiThemable from 'material-ui/styles/muiThemeable';
import {zIndex} from 'material-ui/styles';


class Activity extends React.Component {
  static propTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  state = {
    showAddModal: false,
  }

  handleAddItemButtonClick = () => {
    this.setState({showAddModal: true});
  }

  addNewActivityItem = (data) => {
    // TODO: dispatch action
    this.closeAddModal();
  }

  closeAddModal = () => {
    this.setState({showAddModal: false});
  }

  render() {
    const styles = {
      addButton: {
        position: 'fixed',
        top: this.props.muiTheme.appBar.height / 2,
        right: '1rem',
        zIndex: zIndex.appBar + 100,
      },
    };

    return (
      <div>
        <FloatingActionButton
          style={styles.addButton}
          onTouchTap={this.handleAddItemButtonClick}
          secondary
        >
          <ContentAdd />
        </FloatingActionButton>
        <AddActivityItemModal
          visible={this.state.showAddModal}
          onSave={this.addNewActivityItem}
          onClose={this.closeAddModal}
        />
        <ActivityTable />
      </div>
    );
  }
}

export default muiThemable()(Activity);
