import React from 'react';


export default class AddActivityItemModal extends React.Component {
  state = {
    saveButtonDisabled: true,
    open: false,
  };

  open = () => {
    this.setState({open: true});
  }

  close = () => {
    this.setState({open: false});
  }

  save = () => {
    // TODO: dispatch redux add activity item action
    this.close();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.close}
      />,
      <FlatButton
        label="Add"
        primary={true}
        disabled={this.state.saveButtonDisabled}
        onTouchTap={this.save}
      />,
    ];

    return (
      <Dialog
        title="Add new item"
        actions={actions}
        modal={true}
        open={this.state.open}
      >

      </Dialog>
    );
};
