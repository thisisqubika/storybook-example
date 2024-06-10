/** Subset of all fields.
*/
export interface OpenLibraryBook {
  author_key?: string[];
  author_name?: string[];
  cover_i?: number;
  key: string;
  language?: string[];
  publish_date?: string[];
  publisher?: string[];
  title: string;
} // interface OpenLibraryBook

export interface OpenLibraryBookSearch {
  docs: OpenLibraryBook[];
  numFound: number;
  num_found: number;
  numFoundExact: boolean;
  offset: number | null;
  q: string;
  start: number;
} // interface OpenLibraryBookSearch