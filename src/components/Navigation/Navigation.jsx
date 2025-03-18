import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
