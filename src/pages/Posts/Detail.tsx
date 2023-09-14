import AuthorProfile from 'components/AuthorProfile';
import { Page } from 'components/ui';
import { Link } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() {
  return (
    <Page>
      <h3 className={styles.title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>
      <AuthorProfile />
      <div className={styles.utilBox}>
        <div className={styles.button}>Delete</div>
        <div className={styles.button}>
          <Link to={`/posts/edit/1`}>Edit</Link>
        </div>
      </div>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        fringilla leo, eget imperdiet libero. Pellentesque dignissim, elit
        iaculis pretium fringilla, urna felis fringilla leo, eget viverra justo
        eros pulvinar eros. Suspendisse hendrerit ex a lorem eleifend, vitae
        mollis nisl accumsan. Morbi semper ut diam ut dictum. Sed at vestibulum
        nisl, et viverra sapien. Aliquam sit amet placerat urna. Donec et
        convallis turpis, eu rutrum ex. Proin et nisi id sapien placerat
        accumsan in eget elit. Pellentesque pellentesque est lectus, sit amet
        ultrices purus elementum posuere. Phasellus vel lobortis neque.
      </p>
    </Page>
  );
}
