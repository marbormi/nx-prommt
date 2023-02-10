export interface Page<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: boolean;
  sort: Sort;
  number: number;
  size: number;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}
