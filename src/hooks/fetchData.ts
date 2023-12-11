import axios from 'axios';
import { User } from 'types';

interface GetJSONUser {
  record: User;
}

export const fetchData = async (): Promise<User | undefined> => {
  const data = await axios.get<GetJSONUser>(process.env.GATSBY_JSONBIN_URL || '', {
    headers:
      process.env.NODE_ENV !== 'production'
        ? { 'X-Master-Key': process.env.GATSBY_JSONBIN_API_KEY }
        : { 'X-Access-Key': process.env.GATSBY_JSONBIN_API_KEY },
  });

  return data.data?.record;
};
