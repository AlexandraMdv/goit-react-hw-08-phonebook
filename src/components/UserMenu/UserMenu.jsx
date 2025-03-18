import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};
