import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from '../contacts/contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
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
