import React from 'react';
import {Drawer} from 'material-ui';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import {
  ActionLightbulbOutline, ActionHistory, ActionSettings,
  ActionTrendingUp, AvEqualizer} from 'material-ui/svg-icons';
import muiThemable from 'material-ui/styles/muiThemeable';
import {zIndex} from 'material-ui/styles';
import {grey50} from 'material-ui/styles/colors';


const SelectableList = MakeSelectable(List);  // eslint-disable-line new-cap

const SideBar = (props) => {
  const containerStyle = {
    marginTop: props.muiTheme.appBar.height,
    zIndex: zIndex.appBar - 100,
    backgroundColor: grey50,
  };

  return (
    <Drawer zDepth={1} containerStyle={containerStyle}>
      <SelectableList
        value={location.pathname}
        onChange={props.onListItemSelect}
        style={{paddingTop: 0}}
      >
        <ListItem leftIcon={<ActionHistory />} primaryText="Activity" value="/activity" />
        <ListItem leftIcon={<ActionTrendingUp />} primaryText="Stock" value="/stock" />
        <ListItem leftIcon={<AvEqualizer />} primaryText="Visualization" value="/visualization" />
        <ListItem
          leftIcon={<ActionLightbulbOutline />}
          primaryText="Prediction"
          value="/prediction"
        />
        <ListItem leftIcon={<ActionSettings />} primaryText="Settings" value="/settings" />
      </SelectableList>
    </Drawer>
  );
};

SideBar.propTypes = {
  location: React.PropTypes.object.isRequired,
  muiTheme: React.PropTypes.object.isRequired,
  onListItemSelect: React.PropTypes.func.isRequired,
};

export default muiThemable()(SideBar);
