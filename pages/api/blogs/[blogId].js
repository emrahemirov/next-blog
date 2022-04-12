import dbConnect from '../../../utils/dbConnect';
import Blog from '../../../models/blogModel';

const handler = async (req, res) => {
  const { blogId } = req.query;
  await dbConnect();

  if (req.method === 'GET') {
    const blog = await Blog.findById(blogId);

    if (blog) {
      res.status(200).json({ message: 'success', data: { blog } });
    } else {
      res.status(200).json({ message: 'fail' });
    }
  }
};

export default handler;
