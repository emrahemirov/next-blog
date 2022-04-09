import Link from 'next/Link';
import {
  StyledFooter,
  FooterTextItem
} from '../../../styles/layout/footer/Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTextItem>
        This website was made to test what i learned in React.js and Next.js
      </FooterTextItem>
      <FooterTextItem>
        Check source codes from{' '}
        <Link href='https://github.com' passHref>
          <a target={'_blank'}>github repository</a>
        </Link>
      </FooterTextItem>
      <FooterTextItem>
        For detailed information visit my{' '}
        <Link href='https://emrahemirov.com' passHref>
          <a target={'_blank'}>website</a>
        </Link>
      </FooterTextItem>
    </StyledFooter>
  );
};

export default Footer;
