import { useAuth } from 'hooks/useAuth';
import styles from './AppBar.module.css';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
