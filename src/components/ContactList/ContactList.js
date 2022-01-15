import PropTypes from 'prop-types';
import s from './ContactList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.element}>
            {name}: {number}
            <button
              className={s.button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
