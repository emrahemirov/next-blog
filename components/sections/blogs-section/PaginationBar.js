import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import {
  StyledPaginationBar,
  PageNumberContainer,
  PageNumber
} from '../../../styles/sections/blog-section/PaginationBar.styled';

const PaginationBar = () => {
  const router = useRouter();

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const handlePageNumberClick = e => {
    router.replace(`/pages/${e.target.outerText - 1}`);
  };

  return (
    <StyledPaginationBar
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      {pageNumbers.map(pageNumber => {
        return (
          <PageNumberContainer
            container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
            key={uuidv4()}
          >
            <PageNumber onClick={handlePageNumberClick}>
              {pageNumber}
            </PageNumber>
          </PageNumberContainer>
        );
      })}
    </StyledPaginationBar>
  );
};

export default PaginationBar;
