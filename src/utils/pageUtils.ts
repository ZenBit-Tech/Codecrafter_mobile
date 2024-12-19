import { PAGE_NUMBER_MAP } from '@/constants/pageNumbers';

const defaultPage = 2;

export const getPageFromUrl = (): number => {
  const currentPath = window.location.pathname;

  return PAGE_NUMBER_MAP[currentPath] || defaultPage;
};
