import { nanoid } from 'nanoid';

const addContact = ({ name, number }) => ({
  type: 'contacts/add',
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: 'contacts/delete',
  payload: id,
});

const updateFilter = message => ({
  type: 'contacts/updateFilter',
  payload: message,
});

export default { addContact, deleteContact, updateFilter };
