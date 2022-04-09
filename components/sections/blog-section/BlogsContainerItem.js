import Image from 'next/Image';
import {
  StyledBlogsContainerItem,
  ImageContainer,
  ContentContainer,
  ContentHeader,
  ContentDate,
  ContentSummary
} from '../../../styles/sections/blog-section/BlogsContainerItem.styled';

const BlogsContainerItem = () => {
  return (
    <StyledBlogsContainerItem
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      <ImageContainer
        container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
      >
        <Image
          src='https://i.picsum.photos/id/202/240/135.jpg?hmac=Wa0apaCb9PKGK-OkEixI9-ihW8EUfZMIbrxMV6pt5_Y'
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
        <ContentHeader>Lorem ipsum dolor sit amet.</ContentHeader>
        <ContentDate>12/12/2002</ContentDate>
        <ContentSummary>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore hic
          optio laboriosam voluptas doloremque explicabo. Dolorum temporibus
          assumenda cumque corporis harum consequatur et, eligendi reiciendis
          officiis labore. Cum, tempore rerum porro odit quia exercitationem
          dolore dolor! Fuga nisi voluptate, aliquid illo minima consequatur
          deserunt facere ad dolores quibusdam ex officiis amet doloribus fugit
          labore odio. Omnis aliquam exercitationem consectetur sequi similique
          quos deleniti doloribus ratione excepturi rem quia earum, eos porro
          dolor voluptate numquam possimus? Non soluta vero ad dolor dolorum
          inventore voluptate. Recusandae optio repellat voluptatum unde
          provident iste non mollitia sed ullam dicta, tenetur ipsam soluta a
          doloribus.
        </ContentSummary>
      </ContentContainer>
    </StyledBlogsContainerItem>
  );
};

export default BlogsContainerItem;
