import BlogsContainerItem from './BlogsContainerItem';
import { StyledBlogsContainer } from '../../../styles/sections/blog-section/BlogsContainer.styled';
import { useBlogsStore } from '../../../store/store';

const BlogsContainer = () => {
  const storeBlogs = useBlogsStore(state => state.blogs);

  return (
    <StyledBlogsContainer
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      {storeBlogs.map(storeBlog => {
        return <BlogsContainerItem key={storeBlog._id} blog={storeBlog} />;
      })}
    </StyledBlogsContainer>
  );
};

export default BlogsContainer;
