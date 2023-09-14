import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Blog
      </Link>
      <nav>
        <Link to="/posts/new">Write</Link>
        <Link to="/posts">Post</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}
