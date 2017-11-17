import * as types from '../constants/ActionTypes';
import initialState from '../constants/InitialState';

const data = (state = initialState.data, {type, payload}) => {

  switch(type) {
    case types.ADD_DATA:
      return [...state, payload];
    default:
      return state;
  };
};

export default data;