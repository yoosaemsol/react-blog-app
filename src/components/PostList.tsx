import { useState } from 'react';

import PostBox from 'components/PostBox';

import styles from './PostList.module.css';

interface PostListProps {
  onFilter?: boolean;
}

type FilterType = 'all' | 'my';

export default function PostList({ onFilter = true }: PostListProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  return (
    <section>
      {onFilter && (
        <ul className={styles.filter}>
          <li
            role="presentation"
            className={`${styles.filterItem}  ${
              activeFilter === 'all' && styles.active
            }`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </li>
          <li
            role="presentation"
            className={`${styles.filterItem}  ${
              activeFilter === 'my' && styles.active
            }`}
            onClick={() => setActiveFilter('my')}
          >
            My Posts
          </li>
        </ul>
      )}
      <ul className={styles.postList}>
        {[...Array(10)].map((_, key) => (
          <PostBox key={key} id={key} />
        ))}
      </ul>
    </section>
  );
}
