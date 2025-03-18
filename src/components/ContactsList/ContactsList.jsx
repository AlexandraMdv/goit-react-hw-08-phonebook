import styles from './ContactsList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/tasks/operations';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from '../../redux/tasks/selectors';

const ContactList = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts); // Selector to get the filter value from the Redux store
  // const isLoading = useSelector(selectIsLoading); // Selector to get the loading status from the Redux store
  // const error = useSelector(selectError); // Selector to get the error status from the Redux store

  return (
    <>
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, phone: number }) => (
          <li key={id} className={styles.listItem}>
            <p>
              {name}: {number}
            </p>
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
