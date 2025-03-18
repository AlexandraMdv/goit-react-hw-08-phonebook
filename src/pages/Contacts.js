import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/tasks/operations';
import { selectIsLoading } from '../redux/tasks/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </>
  );
}
