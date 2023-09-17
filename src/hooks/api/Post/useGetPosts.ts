import { useQuery } from '@tanstack/react-query';
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from '@firebase/firestore';
import { db } from 'api/firebase';

export interface PostProps {
  title: string;
  summary: string;
  content: string;
  createdAt: string;
  id: string;
  email: string;
}

interface getPostQuery {
  userId?: string;
  category?: 'Frontend' | 'Backend' | 'Web' | 'Native';
}

const useGetPosts = (customQuery?: getPostQuery, options?: any) => {
  return useQuery<PostProps[], Error>(
    ['posts', customQuery],
    async () => {
      const postsRef = collection(db, 'posts');

      let q = query(postsRef, orderBy('createdAt', 'desc'));

      if (customQuery?.userId) {
        q = query(
          postsRef,
          where('email', '==', customQuery.userId),
          orderBy('createdAt', 'desc')
        );
      }

      const data = await getDocs(q);
      const dataList: any[] = [];

      data.docs.forEach((doc) => {
        dataList.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      return dataList;

      // const querySnapshot = await getDocs(collection(db, 'posts'));
      // const dataList: any[] = [];

      // querySnapshot?.forEach((doc) => {
      //   dataList.push({ ...doc.data(), id: doc.id });
      // });

      // return dataList;
    },
    {
      ...options,
    }
  );
};
export default useGetPosts;
