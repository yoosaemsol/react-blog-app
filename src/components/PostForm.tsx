import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthContext } from 'context/AuthContext';
import { useCreatePost, useGetPost, useUpdatePost } from 'hooks/api';

import styles from './PostForm.module.css';

export default function PostForm() {
  const { mutateAsync: createPost, isLoading } = useCreatePost();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const params = useParams();

  const postId = params.id as string;

  const { data: post } = useGetPost(postId, {
    enabled: !!postId,
  });

  const { mutateAsync: updatePost, isLoading: updateLoading } =
    useUpdatePost(postId);

  const {
    register,
    handleSubmit,
    // formState: { errors },
    setValue,
  } = useForm({
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (postId && post) {
      setValue('title', post.title);
      setValue('summary', post.summary);
      setValue('content', post.content);
    }
  }, [postId, post, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    const { title, summary, content } = data;

    try {
      if (post) {
        // update post
        await updatePost({
          title,
          summary,
          content,
        });

        navigate(`/posts/${postId}`);
      } else {
        // create post
        const res = await createPost({
          title,
          summary,
          content,
          email: user?.email || '',
        });

        navigate(`/posts/${res.id}`);
      }
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

      <button
        disabled={isLoading || updateLoading}
        className={styles.submitBtn}
      >
        {postId && (updateLoading ? 'loading...' : 'Update')}
        {!postId && (isLoading ? 'loading...' : 'Submit')}
      </button>
    </form>
  );
}
