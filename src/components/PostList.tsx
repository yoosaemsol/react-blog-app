import styles from './PostList.module.css';

import PostBox from 'components/PostBox';

interface PostListProps {
  onFilter?: boolean;
}

export default function PostList({ onFilter = true }: PostListProps) {
  return (
    <section>
      {onFilter && (
        <ul className={styles.filter}>
          <li className={`${styles.filterItem}  ${styles.active}`}>All</li>
          <li className={styles.filterItem}>My Posts</li>
        </ul>
      )}
      <ul className={styles.postList}>
        {[...Array(10)].map((_, key) => (
          <PostBox id={key} />
        ))}
      </ul>
    </section>
  );
}
