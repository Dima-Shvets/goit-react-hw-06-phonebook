import { createStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'contacts/add':
      return [...state, payload];

    case 'contacts/delete':
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'contacts/updateFilter':
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items,
  filter,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
