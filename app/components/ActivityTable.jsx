import React from 'react';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,
} from 'material-ui/Table';

const tableColumns = [
  {name: 'Date', help: 'Date when the item was added'},
  {name: 'Description', help: 'Brief description of what the item is about'},
  {name: 'Amount', help: 'Amount spent in the item or earned from the item'},
];

const TABLE_HEIGHT_PERCENTAGE = 0.7;

const styles = {
  emptyMessage: {
    marginTop: '1rem',
  },
};

export default class ActivityTable extends React.Component {
  static propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object),
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

  render() {
    let emptyMessage = null;
    let tableHeight = `${this.state.tableHeight}px`;

    if (!this.props.data.length) {
      emptyMessage = <div style={styles.emptyMessage}>There are no activity items saved yet</div>;
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
            {this.props.data.map((column, i) => {
              return (
                <TableRow key={i} hoverable>
                  <TableRowColumn>{column.date}</TableRowColumn>
                  <TableRowColumn>{column.description}</TableRowColumn>
                  <TableRowColumn>{column.amount}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {emptyMessage}
      </div>
    );
  }
}
