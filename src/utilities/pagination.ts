type GetPageNumberOffsetParams = {
  currentPage: number;
  paginationLength: number;
};

type GetPageNumberOffset = ({ currentPage, paginationLength }: GetPageNumberOffsetParams) => number;

/**
 * currentPage, paginationLength를 받아서 pageNumber를 구할 때 offset을 반환하는 함수
 */
export const getPageNumberOffset: GetPageNumberOffset = ({ currentPage, paginationLength }) => {
  if (currentPage % paginationLength) {
    return currentPage - (currentPage % paginationLength) + 1;
  }

  if ((currentPage / paginationLength) % 2) {
    return Number(`${Math.floor(currentPage / paginationLength / 2)}1`);
  }

  return Number(`${currentPage / paginationLength / 2 - 1}6`);
};
