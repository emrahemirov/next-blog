import Image from 'next/Image';
import { useRouter } from 'next/router';
import {
  StyledBlogsContainerItem,
  LinkContainer,
  ImageContainer,
  ContentContainer,
  ContentHeader,
  ContentDate,
  ContentSummary
} from '../../../styles/sections/blogs-section/BlogsContainerItem.styled';

const BlogsContainerItem = ({ blog, keyAsProp }) => {
  const router = useRouter();
  blog.randomDate = new Date(blog.randomDate);

  const handleBlogClick = params => {
    router.push(`/blog/${keyAsProp}`);
  };

  return (
    <StyledBlogsContainerItem
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      <LinkContainer onClick={handleBlogClick} />
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
