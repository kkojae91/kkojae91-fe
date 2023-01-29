import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

import { COUNT } from '../constants';
import { PARAMETERS } from '../constants/path';
import { ceilBy5Unit, floorBy5Unit } from '../utilities';
import { getPageNumberOffset } from '../utilities/pagination';

type UsePaginationParams = {
  currentPage: number;
  totalPageCount: number;
};

type UsePaginationReturnType = {
  pageNumberOffset: number;
  isDisabledPreviousButton: boolean;
  isDisabledNextButton: boolean;
  handleMovePreviousPagination: MouseEventHandler<HTMLButtonElement>;
  handleMoveNextPagination: MouseEventHandler<HTMLButtonElement>;
  handleMoveTargetPage: (pageNumber: number) => void;
};

const usePagination = ({
  currentPage,
  totalPageCount,
}: UsePaginationParams): UsePaginationReturnType => {
  const router = useRouter();

  const handleMovePreviousPagination = () => {
    const previousPagination = floorBy5Unit(currentPage);
    router.push(`?${PARAMETERS.PAGE}=${previousPagination}`);
  };

  const handleMoveNextPagination = () => {
    const nextPagination = ceilBy5Unit(currentPage) + 1;
    router.push(`?${PARAMETERS.PAGE}=${nextPagination}`);
  };

  const handleMoveTargetPage = (pageNumber: number) => {
    router.push(`?${PARAMETERS.PAGE}=${pageNumber}`);
  };

  const pageNumberOffset = getPageNumberOffset({
    currentPage,
    paginationLength: COUNT.DEFAULT_PAGE_COUNT,
  });

  const isDisabledPreviousButton = ceilBy5Unit(currentPage) === COUNT.DEFAULT_PAGE_COUNT;

  const isDisabledNextButton = ceilBy5Unit(currentPage) === ceilBy5Unit(totalPageCount);

  return {
    pageNumberOffset,
    isDisabledPreviousButton,
    isDisabledNextButton,
    handleMovePreviousPagination,
    handleMoveNextPagination,
    handleMoveTargetPage,
  };
};

export default usePagination;
