import BlogsContainer from './BlogsContainer';
import { StyledBlogsSection } from '../../../styles/sections/blogs-section/BlogsSection.styled';
import PaginationBar from './PaginationBar';

const BlogSection = () => {
  return (
    <StyledBlogsSection>
      <BlogsContainer />
      <PaginationBar />
    </StyledBlogsSection>
  );
};

export default BlogSection;
