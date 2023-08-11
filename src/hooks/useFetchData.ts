import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from 'plugins/cvdata';

interface GetJSONUser {
  record: User;
}

export const useFetchData = (initialUser: User) => {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: ({ signal }) => {
      return axios.get<GetJSONUser>(process.env.GATSBY_JSONBIN_URL || '', {
        signal,
        headers:
          process.env.NODE_ENV !== 'production'
            ? {
                'X-Master-Key': process.env.GATSBY_JSONBIN_API_KEY,
              }
            : {
                'X-Access-Key': process.env.GATSBY_JSONBIN_API_KEY,
              },
      });
    },
  });

  const combinedData: User = { ...initialUser, ...data?.data?.record, img: initialUser.img };

  return combinedData;
};
