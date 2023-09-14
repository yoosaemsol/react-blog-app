import { useForm } from 'react-hook-form';

import styles from './PostForm.module.css';

export default function PostForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = handleSubmit((data) => console.log(data));

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

      <button className={styles.submitBtn}>Submit</button>
    </form>
  );
}
