import PaginationSettings from '../PaginationSettings';

describe('PAGINATION SETTINGS', () => {
  it('should return pagination settings object', () => {
    expect(PaginationSettings.pagination.pageSize).toEqual(2);
    expect(PaginationSettings.pagination.startingPage).toEqual(1);
    expect(PaginationSettings.pagination.pageListNumber).toEqual([]);
  });
});
