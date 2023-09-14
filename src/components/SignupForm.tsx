import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import styles from './SignupForm.module.css';

export default function SignupForm() {
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
      <h1 className={styles.title}>Sign up</h1>
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
        <label htmlFor="retypePassword">Retype Password</label>
        <input
          type="password"
          id="retypePassword"
          required
          {...register('retypePassword', { required: true })}
        />
      </div>
      <div className={styles.block}>
        <p>
          Already have an account?{' '}
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </p>
      </div>
      <button className={styles.LoginBtn}>Sign up</button>
    </form>
  );
}
