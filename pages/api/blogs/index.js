import dbConnect from '../../../utils/dbConnect';
import Blog from '../../../models/blogModel';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let page;

    if (req.body.page >= 0) {
      page = req.body.page;
    } else {
      page = 0;
    }

    await dbConnect();
    const query = {};
    const blogs = await Blog.find(query)
      .sort([['randomDate', -1]])
      .skip(page * 20)
      .limit(20);

    if (blogs.length > 0) {
      res.status(201).json({ message: 'success', data: blogs });
    } else {
      res.status(201).json({ message: 'fail', data: 'not-found' });
    }
  }
};

export default handler;
