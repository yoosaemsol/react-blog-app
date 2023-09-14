import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/posts/new">Write</Link>
      <Link to="/posts">Post</Link>
      <Link to="/profile">Profile</Link>
    </footer>
  );
}
