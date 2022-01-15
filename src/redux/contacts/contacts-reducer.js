import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from '../contacts/contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const { name } = payload;

    const check = state.find(contact => contact.name === name);

    if (check) {
      alert(`${name} is already in contacts`);
      return;
    }

    return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.updateFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
