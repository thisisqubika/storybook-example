import { Box, Card, Typography } from '@mui/material';
import { sxStyles } from './BookGridCell.styles';
import { OpenLibraryBook } from '../../services/openLibrary.types';
import openLibraryApi from '../../services/openLibrary';
  
export interface BookGridCellProps {
  book: OpenLibraryBook;
} // interface BookGridCellProps

function splitTitle(title: string) {
  const parts = title.split(/\s*[:-]\s+/);
  return parts[0] ? parts : [title];
}

function abbreviate(
  list: string[], etc?: string, maxLength = 3,
) {
  if (list.length > maxLength) {
    return list.slice(0, maxLength)
      .concat([etc ?? ` and ${list.length - maxLength} more`]);
  }
  return list;
} // abbreviate

export default function BookGridCell({
  book,
}: BookGridCellProps) {
  const {
    author_name: authorNames,
    cover_i: coverImageId,
    language: languages,
    publish_date: publicationDates,
    publisher: publishers,
    title,
  } = book;
  const styles = sxStyles();

  const [realTitle, subtitle] = splitTitle(title);

  const cardTitle = (
    <Typography data-testid='BookGridCell.title' variant='h4'>
      {realTitle}
    </Typography>
  );
  const cardSubtitle = subtitle ? (
    <Typography data-testid='BookGridCell.subtitle' variant='subtitle1'>
      {subtitle}
    </Typography>
  ) : null;

  const cardAuthors = (
    <Typography variant='body1'>
      {!authorNames ? 'Authors not available'
        : `By: ${abbreviate(authorNames, 'et al.').join(', ')}`}.
    </Typography>
  );
  const cardLanguages = (
    <Typography variant='body1'>
      {!languages ? 'Languages not available'
        : `Languages: ${abbreviate(languages).join(', ')}`}.
    </Typography>
  );
  const cardPublications = (
    <Typography variant='body1'>
      {!publishers ? `Publications data not available`
        : `Published by ${abbreviate(publishers).join('; ')} at ${
        !publicationDates ? 'dates not available' 
          : abbreviate(publicationDates).join(', ')}`
      }.
    </Typography>
  );

  const cardImage = coverImageId ? (
    <img
      alt='Books cover'
      data-testid='BookGridCell.img'
      src={`${openLibraryApi.bookCoverImage(coverImageId)}`}
    />
  ) : (
    <Typography variant='caption'>Image not avaiable</Typography>
  );

  return (
    <Card
      data-testid='BookGridCell'
      sx={styles.card}
    >
      <Box sx={styles.column1}>
        {cardTitle}
        {cardSubtitle}
        {cardAuthors}
        {cardLanguages}
        {cardPublications}
      </Box>
      <Box sx={styles.column2}>
        {cardImage}
      </Box>
    </Card>
  );
} // function BookGridCell
