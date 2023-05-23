export interface Pagination {
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiWrapper<T> {
  pagination: Pagination;
  result: T[];
}
