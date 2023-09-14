import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

interface NavbarProps {
  hideMenu: boolean;
}

export default function Navbar({ hideMenu }: NavbarProps) {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        Blog
      </Link>
      {!hideMenu && (
        <nav>
          <Link to="/posts/new">Write</Link>
          <Link to="/posts">Post</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      )}
    </header>
  );
}
