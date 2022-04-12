import { useBlogsStore } from '../../../store/store';
import {
  StyledBlogsSection,
  BlogContainer,
  BlogHeader,
  BlogDate,
  BlogText
} from '../../../styles/sections/blog-section/BlogSection.styled.js';

const BlogSection = () => {
  const blog = useBlogsStore(state => state.blog);

  blog.randomDate = new Date(blog.randomDate);

  return (
    <StyledBlogsSection>
      <BlogContainer
        container={{
          direction: 'column',
          axisX: 'flex-start',
          axisY: 'center'
        }}
      >
        <BlogHeader>{blog.randomHeader}</BlogHeader>
        <BlogDate>{blog.randomDate.toLocaleString().substring(0, 10)}</BlogDate>
        <BlogText>{blog.randomText}</BlogText>
      </BlogContainer>
    </StyledBlogsSection>
  );
};

export default BlogSection;
