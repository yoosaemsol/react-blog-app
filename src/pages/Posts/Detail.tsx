import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import AuthorProfile from 'components/AuthorProfile';
import { Page } from 'components/ui';
import { useGetPost } from 'hooks/api';
import styles from './Detail.module.css';

export default function Detail() {
  const params = useParams();
  const { user } = useAuthContext();

  const { data: post } = useGetPost(params.id || '', {
    enabled: !!params.id,
  });

  return (
    <Page>
      <h3 className={styles.title}>{post?.title}</h3>
      <AuthorProfile author={post?.email} createdAt={post?.createdAt} />
      {user?.email === post?.email && (
        <div className={styles.utilBox}>
          <div className={styles.button}>Delete</div>
          <div className={styles.button}>
            <Link to={`/posts/edit/1`}>Edit</Link>
          </div>
        </div>
      )}
      <p className={styles?.content}>{post?.content}</p>
    </Page>
  );
}
