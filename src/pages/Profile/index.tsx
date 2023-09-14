import { Link } from 'react-router-dom';

import { Page } from 'components/ui';
import styles from './index.module.css';
import PostList from 'components/PostList';

export default function Profile() {
  return (
    <Page>
      <div className={styles.profileBox}>
        <div className={`${styles.flexBox} ${styles.Large}`}>
          <div className={styles.avatar} />
          <div>
            <p className={styles.email}>johndoe@gmail.com</p>
            <p className={styles.username}>John Doe</p>
          </div>
        </div>
        <Link className={styles.logoutBtn} to="/">
          Logout
        </Link>
      </div>
      <PostList onFilter={false} />
    </Page>
  );
}
