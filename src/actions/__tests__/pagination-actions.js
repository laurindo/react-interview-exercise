import {
  moveLeftPage,
  moveRightPage,
  showPageItemsNumber,
} from '../PaginationActions';

test('#01 Testing Move Left Page - Pagination Actions', () => {
  expect(moveLeftPage().type).toBe('MOVE_LEFT_PAGE');
  expect(moveLeftPage({ pageSize: 2 }).payload.pageSize).toBe(2);
});

test('#02 Testing Move Right Page - Pagination Actions', () => {
  expect(moveRightPage().type).toBe('MOVE_RIGHT_PAGE');
  expect(moveRightPage({ pageSize: 21 }).payload.pageSize).toBe(21);
});

test('#03 Testing Show Number of Pages - Pagination Actions', () => {
  expect(showPageItemsNumber().type).toBe('SHOW_PAGE_NUMBER_ITEMS');
  expect(showPageItemsNumber({ startingPage: 2 }).payload.startingPage).toBe(2);
});
