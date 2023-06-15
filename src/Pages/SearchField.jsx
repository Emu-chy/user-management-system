/* eslint-disable react/prop-types */
import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

const SearchField = ({ setSearch }) => {
    return (
        <TextField
            type="text"
            placeholder="Search"
            size="small"
            color="secondary"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchOutlined />
                    </InputAdornment>
                ),
            }}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default SearchField;
