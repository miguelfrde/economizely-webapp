import moment from 'moment';

export const ADD_ACTIVITY_ITEM = 'ADD_ACTIVITY_ITEM';

export const addActivityItem = (item) => {
  return {
    type: ADD_ACTIVITY_ITEM,
    item: {...item, date: moment()},
  };
};
