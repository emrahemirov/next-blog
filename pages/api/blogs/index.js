import dbConnect from '../../../utils/dbConnect';
import Blog from '../../../models/blogModel';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let pageIndex;

    if (req.body.page >= 1) {
      pageIndex = req.body.page - 1;
    } else {
      pageIndex = 0;
    }

    await dbConnect();
    const query = {};
    const blogs = await Blog.find(query)
      .sort([['randomDate', -1]])
      .skip(pageIndex * 10)
      .limit(10);

    const allBlogsCount = await Blog.countDocuments({});

    if (blogs.length > 0) {
      res
        .status(201)
        .json({ message: 'success', data: { blogs, allBlogsCount } });
    } else {
      res.status(201).json({ message: 'fail' });
    }
  }
};

export default handler;
