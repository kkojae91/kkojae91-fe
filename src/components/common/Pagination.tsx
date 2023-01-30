import React from 'react';
import styled, { css } from 'styled-components';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

import usePagination from '../../hooks/usePagination';
import { COUNT } from '../../constants';

type PaginationProps = {
  currentPage: number;
  totalPageCount: number;
};

const Pagination = ({ currentPage, totalPageCount }: PaginationProps) => {
  const {
    pageNumberOffset,
    isDisabledPreviousButton,
    isDisabledNextButton,
    handleMovePreviousPagination,
    handleMoveNextPagination,
    handleMoveTargetPage,
  } = usePagination({
    currentPage,
    totalPageCount,
  });

  return (
    <Container>
      <Button disabled={isDisabledPreviousButton} onClick={handleMovePreviousPagination}>
        <VscChevronLeft />
      </Button>

      <PageWrapper>
        {Array.from({ length: COUNT.DEFAULT_PAGE_COUNT }).map((_, index) => {
          const pageNumber = index + pageNumberOffset;
          const isCurrentPage = pageNumber === currentPage;

          return (
            <React.Fragment key={index}>
              {totalPageCount >= pageNumber && (
                <Page
                  type='button'
                  selected={isCurrentPage}
                  disabled={isCurrentPage}
                  onClick={() => handleMoveTargetPage(pageNumber)}
                >
                  {pageNumber}
                </Page>
              )}

              {totalPageCount < pageNumber && null}
            </React.Fragment>
          );
        })}
      </PageWrapper>

      <Button disabled={isDisabledNextButton} onClick={handleMoveNextPagination}>
        <VscChevronRight />
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

const Button = styled.button`
  &:disabled {
    color: #e2e2ea;
    cursor: default;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

type PageType = {
  selected: boolean;
};

const Page = styled.button<PageType>`
  padding: 4px 6px;
  font-size: 20px;

  ${({ selected }) => css`
    background-color: ${selected ? '#000' : 'transparent'};
    color: ${selected ? '#fff' : '#000'};
  `}

  & + & {
    margin-left: 4px;
  }

  &:disabled {
    cursor: default;
  }
`;
