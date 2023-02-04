// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Post = {
    id: number;
    title: string;
};

type Data = {
    posts: Post[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | { message: string }>
) {
    const { method } = req;
    if (method === 'GET') {
        // return a list of dummy posts
        return res.status(200).json({
            posts: [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' },
                { id: 3, title: 'Post 3' }
            ]
        });
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
