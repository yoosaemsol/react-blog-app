import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from '@firebase/firestore';
import { db } from 'api/firebase';

export interface PostProps {
  title: string;
  summary: string;
  content: string;
  createdAt: string;
  id: string;
  email: string;
}

const useGetPosts = (options?: any) => {
  return useQuery<PostProps[], Error>(
    ['posts'],
    async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const dataList: any[] = [];

      querySnapshot?.forEach((doc) => {
        dataList.push({ ...doc.data(), id: doc.id });
      });

      return dataList;
    },
    {
      ...options,
    }
  );
};
export default useGetPosts;
