import {
    Stack,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
  } from "@mui/material";
  
  type FilterBarProps = {
    search: string;
    onSearchChange: (value: string) => void;
    status: string;
    onStatusChange: (value: string) => void;
  };
  
  const FilterBar = ({
    search,
    onSearchChange,
    status,
    onStatusChange
  }: FilterBarProps) => {
    return (
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="flex-end"
      >
        <TextField
          label="Search Customer"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            label="Status"
          >
            <MenuItem value="">All</MenuItem>
            {["pending", "confirmed", "preparing", "ready", "delivered", "completed"].map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    );
  };
  
  export default FilterBar;