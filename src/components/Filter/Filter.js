import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Filter.module.scss';
import contactsActions from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';

const filterId = nanoid();

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const updateFilter = message =>
    dispatch(contactsActions.updateFilter(message));

  const filterHandler = e => {
    const message = e.target.value;
    updateFilter(message);
  };

  return (
    <>
      <label className={s.label} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        id={filterId}
        type="text"
        name="filter"
        value={filter}
        onChange={filterHandler}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
