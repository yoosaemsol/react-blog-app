import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { signup } from 'api/firebase';

import styles from './SignupForm.module.css';

export default function SignupForm() {
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
      const user = await signup(data.email, data.password);
      if (user) {
        navigate('/');
      }
    } catch (errorMessage: any) {
      console.error(errorMessage);
      //auth/email-already-in-use
    }
  });

  return (
    <form onSubmit={onSubmit} className={styles.form}>
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
