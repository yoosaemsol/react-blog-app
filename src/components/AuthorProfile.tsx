import styles from './AuthorProfile.module.css';

export default function AuthorProfile() {
  return (
    <div className={styles.profileBox}>
      <div className={styles.avatar} />
      <p className={styles.authorName}>John Doe</p>
      <p className={styles.postDate}>2023.09.14</p>
    </div>
  );
}
