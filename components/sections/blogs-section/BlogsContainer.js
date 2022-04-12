import BlogsContainerItem from './BlogsContainerItem';
import { StyledBlogsContainer } from '../../../styles/sections/blogs-section/BlogsContainer.styled';
import { useBlogsStore } from '../../../store/store';

const BlogsContainer = () => {
  const blogs = useBlogsStore(state => state.blogs);

  return (
    <StyledBlogsContainer
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      {blogs.map(blog => {
        return (
          <BlogsContainerItem key={blog._id} blog={blog} keyAsProp={blog._id} />
        );
      })}
    </StyledBlogsContainer>
  );
};

export default BlogsContainer;
