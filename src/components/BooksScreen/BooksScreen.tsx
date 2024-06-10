import { Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useFetchBookSearch } from "../../services/openLibrary";
import { SearchInput } from "../SearchInput";
import { PageLayout } from "../PageLayout";
import { BooksGrid } from "../BooksGrid";
import { LoadingIndicator } from "../LoadingIndicator";
import { sxStyles } from "./BooksScreen.styles";


const DEFAULT_BOOK_SEARCH = 'React web';

export default function BooksScreen() {
  const styles = sxStyles();
  const [queryString, setQueryString] = useState(DEFAULT_BOOK_SEARCH);
  const {
    data: bookSearch,
    isLoading,
    error: bookSearchError,
  } = useFetchBookSearch({ q: queryString, offset: 0 });

  const header = (
    <SearchInput
      color='white'
      initialTerm={DEFAULT_BOOK_SEARCH}
      onSearch={(term: string) => setQueryString(term)}
    />
  );
  const errorMessage = bookSearchError && (<>
    <Typography color='error' variant='h5'>
      Error loading data. Please try again later.
    </Typography>
    <Typography variant='body1'>{bookSearchError.message}</Typography>
  </>);

  return (
    <PageLayout
      header={header}
    >
      <Paper
        sx={styles.main}>
        {isLoading || !bookSearch
          ? <LoadingIndicator errorMessage={errorMessage} />
          : <BooksGrid books={bookSearch.docs}/>
        }
      </Paper>
    </PageLayout>
  );
} // function BooksScreen
