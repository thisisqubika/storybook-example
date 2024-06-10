import { CSSProperties, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Search, sxStyles } from "./SearchInput.styles";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export interface SearchInputProps {
  color?: CSSProperties['color'];
  disabled?: boolean;
  initialTerm?: string;
  onSearch: (term: string) => void;
} // interface SearchInputProps

export default function SearchInput({
  color,
  disabled = false,
  initialTerm = '',
  onSearch,
}: SearchInputProps) {
  const styles = sxStyles();
  const [term, setTerm] = useState(initialTerm);

  const endAdornment = (
    <InputAdornment position='end'>
      <IconButton
        data-testid='SearchInput.IconButton'
        onClick={() => onSearch(term)}
      >
        <SearchIcon sx={{ color }} />
      </IconButton>
    </InputAdornment>
  ); // const endAdornment

  return (
    <Search>
      <TextField
        data-testid='SearchInput'
        disabled={disabled}
        inputProps={{ 'data-testid': 'SearchInput.input' }}
        InputProps={{
          endAdornment,
          sx: { color },
        }}
        onChange={(e) => setTerm(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') onSearch(term);
        }}
        placeholder='Search...'
        sx={styles.textField}
        value={term}
        variant="standard"
      />
    </Search>
  );
} // function SearchInput
