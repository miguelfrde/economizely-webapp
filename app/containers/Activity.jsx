import React from 'react';
import {connect} from 'react-redux';
import {FloatingActionButton} from 'material-ui';
import {ContentAdd} from 'material-ui/svg-icons';
import muiThemable from 'material-ui/styles/muiThemeable';
import {zIndex} from 'material-ui/styles';
import {ActivityTable, AddActivityItemModal} from '../components';
import {addActivityItem} from '../actions';


class Activity extends React.Component {
  static propTypes = {
    muiTheme: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }

  state = {
    showAddModal: false,
  }

  handleAddItemButtonClick = () => {
    this.setState({showAddModal: true});
  }

  addNewActivityItem = (item) => {
    this.props.dispatch(addActivityItem(item));
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
        <ActivityTable data={this.props.items} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.activity.items,
  };
};

export default connect(
  mapStateToProps
)(muiThemable()(Activity));
