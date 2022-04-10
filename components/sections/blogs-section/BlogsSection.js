import BlogsContainer from './BlogsContainer';
import { StyledBlogsSection } from '../../../styles/sections/blog-section/BlogsSection.styled';
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
