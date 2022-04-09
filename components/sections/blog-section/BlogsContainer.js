import BlogsContainerItem from './BlogsContainerItem';
import { StyledBlogsContainer } from '../../../styles/sections/blog-section/BlogsContainer.styled';

const BlogsContainer = () => {
  return (
    <StyledBlogsContainer
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
      <BlogsContainerItem />
    </StyledBlogsContainer>
  );
};

export default BlogsContainer;
