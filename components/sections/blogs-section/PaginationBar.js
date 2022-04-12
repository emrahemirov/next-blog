import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { useBlogsStore } from '../../../store/store';
import {
  StyledPaginationBar,
  PageNumberContainer,
  PageNumber
} from '../../../styles/sections/blogs-section/PaginationBar.styled';

const PaginationBar = () => {
  const router = useRouter();
  const allBlogsCount = useBlogsStore(state => state.allBlogsCount);

  const getPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 0; i < allBlogsCount / 10; i++) {
      pageNumbers.push(i + 1);
    }
    return pageNumbers;
  };

  const handlePageNumberClick = e => {
    router.push(`${e.target.outerText}`);
  };

  const pageNumberContents = () => {
    let contentString;

    return contentString;
  };

  return (
    <StyledPaginationBar
      container={{ direction: 'row', axisX: 'center', axisY: 'center' }}
    >
      {pageNumberContents()}
      {getPageNumbers().map(pageNumber => {
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
