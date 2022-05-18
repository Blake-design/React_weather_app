import * as React from "react";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Dropdown = ({ data, handleChange, xAttribute }) => {
  const theme = useTheme();

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: 300, mt: 3 }}>
        <InputLabel id="label">contaminants</InputLabel>
        <Select
          value={xAttribute}
          onChange={(e) => handleChange(e.target.value)}
          inputProps={{ "aria-label": "Without label" }}
          label="contaminants"
        >
          {Object.keys(data[0].components).map((c) => (
            <MenuItem value={c} key={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
