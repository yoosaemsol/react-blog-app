import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthContext } from 'context/AuthContext';
import { useCreatePost } from 'hooks/api';

import styles from './PostForm.module.css';

export default function PostForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const { mutateAsync: createPost, isLoading } = useCreatePost();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const { title, summary, content } = data;

    try {
      await createPost({ title, summary, content, email: user?.email || '' });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      action="/post"
      method="POST"
      className={styles.form}
    >
      <div className={styles.block}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          required
          {...register('title', { required: true })}
        />
      </div>
      <div className={styles.block}>
        <label htmlFor="summary">Summary</label>
        <input
          type="text"
          id="summary"
          required
          {...register('summary', { required: true })}
        />
      </div>
      <div className={styles.block}>
        <label htmlFor="content">Content</label>
        <textarea id="content" {...register('content', { required: true })} />
      </div>

      <button disabled={isLoading} className={styles.submitBtn}>
        {isLoading ? 'loading...' : 'Submit'}
      </button>
    </form>
  );
}
