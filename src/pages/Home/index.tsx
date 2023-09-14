import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import PostBox from 'components/PostBox';

export default function Home() {
  return (
    <section>
      <ul className={styles.filter}>
        <li className={`${styles.filterItem}  ${styles.active}`}>All</li>
        <li className={styles.filterItem}>My Posts</li>
      </ul>
      <ul className={styles.postList}>
        {[...Array(10)].map((_, key) => (
          <PostBox id={key} />
        ))}
      </ul>
    </section>
  );
}
