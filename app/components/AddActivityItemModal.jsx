import React from 'react';
import {Dialog, FlatButton, RadioButton, RadioButtonGroup, TextField} from 'material-ui';
import {red500} from 'material-ui/styles/colors';
import {validNotEmptyString, validNumber} from '../utils';
import {omit} from 'lodash';


const styles = {
  radioButton: {
    element: {
      marginBottom: '1rem',
    },
  },
  cancelButton: {
    color: red500,
  },
};


const formValidations = [
  {
    target: 'amount',
    isValid: validNumber,
    errorMessage: 'Amount has to be a number',
  }, {
    target: 'description',
    isValid: validNotEmptyString,
    errorMessage: 'Description cannot be empty',
  }, {
    target: 'category',
    isValid: validNotEmptyString,
    errorMessage: 'Category cannot be empty',
  },
];


const initialState = {
  saveButtonDisabled: true,
  errors: {},
  data: {
    amount: 0.0,
    description: '',
    category: '',
  },
  type: {
    factor: -1.0,
    value: 'expense',
  },
};


export default class AddActivityItemModal extends React.Component {
  static propTypes = {
    visible: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
  }

  state = initialState;

  reset = () => {
    this.setState(initialState);
  }

  close = () => {
    this.reset();
    this.props.onClose();
  }

  save = () => {
    const amount = (this.state.data.amount.length) ?
      parseFloat(this.state.data.amount) : 0.0;
    this.props.onSave({
      ...this.state.data,
      amount: amount * this.state.type.factor,
    });
    this.reset();
  }

  validateFormOnChange = (event, value) => {
    let errors = this.state.errors;

    formValidations.forEach((validation) => {
      if (event.target.name !== validation.target) {
        return;
      }

      if (validation.isValid(value)) {
        errors = omit(errors, validation.target);
      } else {
        errors[validation.target] = validation.errorMessage;
      }
    });

    this.setState({
      errors,
      data: {...this.state.data, [event.target.name]: event.target.value},
      saveButtonDisabled: Object.keys(errors).length !== 0,
    });
  }

  handleTypeOfItemChange = (_, value) => {
    const factor = (value === 'expense') ? -1.0 : 1.0;
    this.setState({type: {value, factor}});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.close}
        disabled={this.state.addButtonDisabled}
        style={styles.cancelButton}
      />,
      <FlatButton
        label="Add"
        disabled={this.state.saveButtonDisabled}
        onTouchTap={this.save}
        primary
      />,
    ];

    return (
      <Dialog
        title="New activity item"
        actions={actions}
        open={this.props.visible}
        modal
      >
        <RadioButtonGroup
          name="typeOfItem"
          defaultSelected={this.state.type.value}
          onChange={this.handleTypeOfItemChange}
        >
          <RadioButton
            value="expense"
            label="Expense"
            style={styles.radioButton.element}
          />
          <RadioButton
            value="entry"
            label="Entry"
            style={styles.radioButton.element}
          />
        </RadioButtonGroup>
        <TextField
          name="description"
          value={this.state.data.description}
          floatingLabelFixed
          hintText="Description"
          floatingLabelText="Short item description"
          onChange={this.validateFormOnChange}
          errorText={this.state.errors.description}
        />
        <br />
        <TextField
          name="category"
          value={this.state.data.category}
          floatingLabelFixed
          hintText="Category"
          floatingLabelText="Category to which the item belongs"
          onChange={this.validateFormOnChange}
          errorText={this.state.errors.category}
        />
        <br />
        <TextField
          name="amount"
          value={this.state.data.amount}
          type="number"
          step="0.01"
          min="0.01"
          floatingLabelFixed
          hintText="0.00"
          floatingLabelText="Amount to save"
          errorText={this.state.errors.amount}
          onChange={this.validateFormOnChange}
        />
      </Dialog>
    );
  }
}
