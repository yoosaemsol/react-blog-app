import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from 'api/firebase';

import styles from './LoginForm.module.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const user = await login(data.email, data.password);
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
      <h1 className={styles.title}>Login</h1>
      <div className={styles.block}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          required
          {...register('email', { required: true })}
        />
      </div>
      <div className={styles.block}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          {...register('password', { required: true })}
        />
      </div>
      <div className={styles.block}>
        <p>
          Don't you have an account?
          <Link className={styles.link} to="/signup">
            Sign up
          </Link>
        </p>
      </div>
      <button className={styles.LoginBtn}>Login</button>
    </form>
  );
}
