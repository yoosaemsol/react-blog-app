import React from 'react';
import styles from './index.module.css';
import PostBox from 'components/PostBox';
import { Page } from 'components/ui';

export default function Home() {
  return (
    <Page>
      <ul className={styles.filter}>
        <li className={`${styles.filterItem}  ${styles.active}`}>All</li>
        <li className={styles.filterItem}>My Posts</li>
      </ul>
      <ul className={styles.postList}>
        {[...Array(10)].map((_, key) => (
          <PostBox id={key} />
        ))}
      </ul>
    </Page>
  );
}
