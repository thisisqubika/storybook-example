import { Grid } from '@mui/material';
import { sxStyles } from './BooksGrid.styles';
import { OpenLibraryBook } from '../../services/openLibrary.types';
import { BookGridCell } from '../BookGridCell';
  
export interface BooksGridProps {
  books: OpenLibraryBook[];
} // interface BooksGridProps

export default function BooksGrid({
  books,
}: BooksGridProps) {
  const styles = sxStyles();
  return (
    <Grid
      data-testid='BooksGrid'
      sx={styles.root}
    >
      {books.map((book) => (
        <BookGridCell
          book={book}
          key={book.key}
        />
      ))}
    </Grid>
  );
} // function BooksGrid
