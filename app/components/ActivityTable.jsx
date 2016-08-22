import React from 'react';
import {red700, green700} from 'material-ui/styles/colors';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
} from 'material-ui/Table';

const tableColumns = [
  {name: 'Date', help: 'Date when the item was added'},
  {name: 'Category', help: 'Category to which the item belongs'},
  {name: 'Description', help: 'Brief description of what the item is about'},
  {name: 'Amount', help: 'Amount spent in the item or earned from the item'},
];

const TABLE_HEIGHT_PERCENTAGE = 0.7;

const style = {
  amountStyle: (amount) => { return {color: amount < 0 ? red700 : green700}; },
};

export default class ActivityTable extends React.Component {
  static propTypes = {
    emptyMessageComponent: React.PropTypes.element.isRequired,
    data: React.PropTypes.arrayOf(React.PropTypes.shape({
      date: React.PropTypes.object,  // TODO(miguelfrde): make date a UTC timestamp
      category: React.PropTypes.string,
      description: React.PropTypes.string,
      amount: React.PropTypes.amount,
    })),
  };

  static defaultProps = {
    data: [],
  };

  state = {
    tableHeight: 'inherit',
  };

  componentDidMount = () => {
    this.updateTableHeight();
    window.addEventListener('resize', this.updateTableHeight);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateTableHeight);
  }

  updateTableHeight = () => {
    this.setState({
      tableHeight: Math.floor(window.innerHeight * TABLE_HEIGHT_PERCENTAGE),
    });
  }

  renderRow(item, key) {
    const date = item.date.format('MMM Do, YYYY');
    const amount = (item.amount < 0 ? '-' : '+') + Math.abs(item.amount).toFixed(2);

    return (
      <TableRow key={key} hoverable>
        <TableRowColumn>{date}</TableRowColumn>
        <TableRowColumn>{item.category}</TableRowColumn>
        <TableRowColumn>{item.description}</TableRowColumn>
        <TableRowColumn style={style.amountStyle(amount)}>{amount}</TableRowColumn>
      </TableRow>
    );
  }

  renderEmptyMessage() {
    if (this.props.data.length) {
      return null;
    }
    return this.props.emptyMessageComponent;
  }

  render() {
    let tableHeight = `${this.state.tableHeight}px`;

    if (!this.props.data.length) {
      tableHeight = '1rem';
    }

    return (
      <div>
        <Table
          fixedFooter={false}
          selectable={false}
          height={tableHeight}
          fixedHeader
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              {tableColumns.map((column, i) => {
                return (
                  <TableHeaderColumn key={i} tooltip={column.help}>{column.name}</TableHeaderColumn>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={false}
          >
            {this.props.data.map(this.renderRow)}
          </TableBody>
        </Table>
        {this.renderEmptyMessage()}
      </div>
    );
  }
}
