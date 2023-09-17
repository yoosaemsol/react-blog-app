import { useState } from 'react';

import PostBox from 'components/PostBox';

import styles from './PostList.module.css';
import { useGetPosts } from 'hooks/api';
import { Link } from 'react-router-dom';

interface PostListProps {
  onFilter?: boolean;
}

type FilterType = 'all' | 'my';

export default function PostList({ onFilter = true }: PostListProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const { data: posts, isLoading } = useGetPosts();

  if (isLoading) {
    <p>...loading</p>;
  }

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
      {!!posts?.length && (
        <ul className={styles.postList}>
          {posts?.map((post) => (
            <PostBox post={post} key={post.id} />
          ))}
        </ul>
      )}
      {posts?.length === 0 && (
        <div className={styles.noPosts}>
          <p>No Posts</p>

          <Link to="/posts/new">Let's write your first post</Link>
        </div>
      )}
    </section>
  );
}
