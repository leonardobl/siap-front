export interface IPageRequest {
  page?: number;
  size?: number;
  sort?: string;
}

export interface IPageableObject {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: ISortObject;
  unpaged: boolean;
}

export interface ISortObject {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
