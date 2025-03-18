// import ContactList from './ContactsList/ContactsList';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    // <div
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'flex-start',
    //     margin: 50,
    //     padding: 20,
    //     borderRadius: 10,
    //     boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.1)',
    //     fontSize: 40,
    //     maxWidth: 400,
    //     color: '#010101',
    //   }}
    //   className="phonebookSection"
    // >
    //   {/* <h1 style={{fontSize: 40}}>Phonebook</h1>
    //   <ContactForm />
    //   <Filter />
    //   <ContactList /> */}
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
