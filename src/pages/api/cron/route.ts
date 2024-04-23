import { axiosClient } from '@/lib/api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await axiosClient.get('/users/profile/photos');
  res.status(200).json(response.data);
}