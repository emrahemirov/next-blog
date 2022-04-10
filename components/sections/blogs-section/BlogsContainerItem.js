import Image from 'next/Image';
import {
  StyledBlogsContainerItem,
  ImageContainer,
  ContentContainer,
  ContentHeader,
  ContentDate,
  ContentSummary
} from '../../../styles/sections/blog-section/BlogsContainerItem.styled';

const BlogsContainerItem = ({ blog }) => {
  blog.randomDate = new Date(blog.randomDate);

  return (
    <StyledBlogsContainerItem
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      <ImageContainer
        container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
      >
        <Image
          src={blog.randomImageLink}
          alt='blog image'
          width='240px'
          height='135px'
        />
      </ImageContainer>
      <ContentContainer
        container={{
          direction: 'column',
          axisX: 'flex-start',
          axisY: 'flex-start'
        }}
      >
        <ContentHeader>{blog.randomHeader}</ContentHeader>
        <ContentDate>
          {blog.randomDate.toLocaleString().substring(0, 10)}
        </ContentDate>
        <ContentSummary>{blog.randomText}</ContentSummary>
      </ContentContainer>
    </StyledBlogsContainerItem>
  );
};

export default BlogsContainerItem;
