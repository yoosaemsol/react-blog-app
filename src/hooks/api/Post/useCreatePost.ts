import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { collection, addDoc, DocumentReference } from '@firebase/firestore';
import { db } from 'api/firebase';

interface IPost {
  title: string;
  summary: string;
  content: string;
  email: string;
}

export const useCreatePost = (
  options?: UseMutationOptions<DocumentReference, unknown, IPost>
) => {
  return useMutation<DocumentReference, unknown, IPost>(
    async ({ title, summary, content, email }: IPost) => {
      const data = await addDoc(collection(db, 'posts'), {
        title,
        summary,
        content,
        createdAt: new Date()?.toLocaleString(),
        email,
      });

      return data;
    },
    {
      ...options,
    }
  );
};

export default useCreatePost;
