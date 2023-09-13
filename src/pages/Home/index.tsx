import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <Link to="/posts/new">Write</Link>
          <Link to="/posts">Post</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </header>
      <div className={styles.postList}>Post list</div>
      <footer className={styles.footer}>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </footer>
    </div>
  );
}
