import React from 'react';
import { Link } from 'react-router-dom';
import AuthorProfile from './AuthorProfile';
import styles from './PostBox.module.css';

interface IPostBox {
  id: number;
}

export default function PostBox({ id }: IPostBox) {
  return (
    <li className={styles.container}>
      <AuthorProfile />
      <Link to={`/posts/${id}`}>
        <h3 className={styles.title}>Post {id}</h3>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
          fringilla leo, eget imperdiet libero. Pellentesque dignissim, elit
          iaculis pretium fringilla, urna felis fringilla leo, eget viverra
          justo eros pulvinar eros. Suspendisse hendrerit ex a lorem eleifend,
          vitae mollis nisl accumsan. Morbi semper ut diam ut dictum. Sed at
          vestibulum nisl, et viverra sapien. Aliquam sit amet placerat urna.
          Donec et convallis turpis, eu rutrum ex. Proin et nisi id sapien
          placerat accumsan in eget elit. Pellentesque pellentesque est lectus,
          sit amet ultrices purus elementum posuere. Phasellus vel lobortis
          neque.
        </p>
      </Link>
      <div className={styles.utilBox}>
        <div className={styles.button}>Delete</div>
        <div className={styles.button}>Edit</div>
      </div>
    </li>
  );
}
