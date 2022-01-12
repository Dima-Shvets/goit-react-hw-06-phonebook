import { combineReducers } from '@reduxjs/toolkit';

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

export default combineReducers({
  items,
  filter,
});
