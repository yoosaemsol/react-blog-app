import { useAuthContext } from 'context/AuthContext';
import { logout } from 'api/firebase';
import PostList from 'components/PostList';
import { Page } from 'components/ui';
import styles from './index.module.css';

export default function Profile() {
  const { user } = useAuthContext();

  return (
    <Page>
      <div className={styles.profileBox}>
        <div className={`${styles.flexBox} ${styles.Large}`}>
          <div className={styles.avatar} />
          <div>
            <p className={styles.email}>{user?.email}</p>
            <p className={styles.username}>{user?.displayName || 'User'}</p>
          </div>
        </div>
        <div
          onClick={async () => {
            try {
              await logout();
              console.log('login success');
            } catch (e: any) {
              console.error(e);
            }
          }}
          role="presentation"
          className={styles.logoutBtn}
        >
          Logout
        </div>
      </div>
      <PostList onFilter={false} />
    </Page>
  );
}
