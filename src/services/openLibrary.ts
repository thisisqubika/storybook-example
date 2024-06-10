import { useQuery } from "@tanstack/react-query";
import { Api } from "./base";
import { type OpenLibraryBookSearch } from "./openLibrary.types";

export const baseURL = new URL('https://openlibrary.org');

export interface OpenLibraryQueryParams {
  fields?: string;
  lang?: string;
  limit?: number;
  offset: number;
  q: string;
} // interface OpenLibraryQueryParams

export class OpenLibraryApi extends Api {
  constructor() {
    super({
      baseURL,
      defaultHeaders: {},
    });
  } // constructor

  bookCoverImage(id: number | string) {
    return new URL(`https://covers.openlibrary.org/b/id/${
      encodeURIComponent(id)}-M.jpg`);
  } // bookCoverImage

  async searchBooks(params: OpenLibraryQueryParams) {
    return this.get<OpenLibraryBookSearch>({
      pathname: 'search.json', 
      searchParams: {
        fields: 'author_key,author_name,cover_i,key,language,publish_date,publisher,title',
        lang: 'en',
        limit: 10,
        ...params,
      },
    });
  } // searchBooks

} // class OpenLibraryApi

const openLibraryApi = new OpenLibraryApi();

export default openLibraryApi;

export function useFetchBookSearch(params: OpenLibraryQueryParams) {
  return useQuery({
    queryKey: ['search.json', params],
    queryFn: () => openLibraryApi.searchBooks(params),
  });
} // function useFetchBookSearch
