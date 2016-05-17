import {combineReducers} from 'redux';
import {ADD_ACTIVITY_ITEM} from '../actions';


const initialState = {
  activity: {
    items: [],
  },
};


const activity = (state = initialState.activity, action) => {
  switch (action.type) {
    case ADD_ACTIVITY_ITEM:
      return {...state, items: [action.item, ...state.items]};
    default:
      return state;
  }
};


export default combineReducers({
  activity,
});
