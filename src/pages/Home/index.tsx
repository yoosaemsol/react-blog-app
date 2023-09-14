import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import PostBox from 'components/PostBox';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link to="/posts/new">Write</Link>
          <Link to="/posts">Post</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <nav className={styles.navigation}>
        <div className={`${styles.navigationMenu}  ${styles.active}`}>All</div>
        <div>My Posts</div>
      </nav>
      <ul className={styles.postList}>
        {[...Array(10)].map((_, key) => (
          <PostBox id={key} />
        ))}
      </ul>
      <footer className={styles.footer}>
        <Link to="/posts/new">Write</Link>
        <Link to="/posts">Post</Link>
        <Link to="/profile">Profile</Link>
      </footer>
    </>
  );
}
