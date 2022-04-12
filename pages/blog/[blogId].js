import { useEffect } from 'react';
import { useBlogsStore } from '../../store/store';
import BlogSection from '../../components/sections/blog-section/BlogSection';

const BlogPage = props => {
  const setBlog = useBlogsStore(state => state.setBlog);

  useEffect(() => {
    setBlog(props.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <BlogSection />;
};

export async function getStaticProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/blogs/${context.params.blogId}`,
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  );

  const responseObj = await response.json();

  const { message, data } = responseObj;

  if (message === 'success') {
    return { props: { data: data.blog } };
  } else {
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export default BlogPage;
