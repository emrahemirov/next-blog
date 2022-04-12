import { useEffect } from 'react';
import BlogsSection from '../../components/sections/blogs-section/BlogsSection';
import { useBlogsStore } from '../../store/store';

const Pagination = props => {
  const setBlogs = useBlogsStore(state => state.setBlogs);
  const setAllBlogsCount = useBlogsStore(state => state.setAllBlogsCount);

  setBlogs(props.data);
  setAllBlogsCount(props.allBlogsCount);

  return <BlogsSection />;
};

export async function getStaticProps(context) {
  const response = await fetch('http://localhost:3000/api/blogs', {
    method: 'POST',

    body: JSON.stringify({
      page: context.params.pageId
    }),

    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

  const responseObj = await response.json();

  const { message, data } = responseObj;

  if (message === 'fail') {
    return { notFound: true };
  }

  return {
    props: { data: data.blogs, allBlogsCount: data.allBlogsCount }
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export default Pagination;
