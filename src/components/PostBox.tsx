import { useAuthContext } from 'context/AuthContext';
import { PostProps } from 'hooks/api/Post/useGetPosts';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthorProfile from './AuthorProfile';
import styles from './PostBox.module.css';

interface PostBoxProps {
  post: PostProps;
}

export default function PostBox({ post }: PostBoxProps) {
  const { id, title, summary, email, createdAt } = post;
  const { user } = useAuthContext();

  return (
    <li className={styles.container}>
      <Link to={`/posts/${id}`}>
        <AuthorProfile author={email} createdAt={createdAt} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{summary}</p>
      </Link>
      {user?.email === email && (
        <div className={styles.utilBox}>
          <div className={styles.button}>Delete</div>
          <div className={styles.button}>Edit</div>
        </div>
      )}
    </li>
  );
}
