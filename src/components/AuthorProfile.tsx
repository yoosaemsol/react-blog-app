import styles from './AuthorProfile.module.css';

interface AuthorProfileProps {
  author: string;
  createdAt: string;
}
export default function AuthorProfile({
  author,
  createdAt,
}: AuthorProfileProps) {
  return (
    <div className={styles.profileBox}>
      <div className={styles.avatar} />
      <p className={styles.authorName}>{author}</p>
      <p className={styles.postDate}>{createdAt}</p>
    </div>
  );
}
