import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { fontSize } from "@mui/system";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const items = [
  "Assets",
  "Collections",
  "Free",
  "Premium",
  "Vector",
  "Illustration",
  "Photos",
  "Graphics Design",
];

function getStyles(item, itemName, theme) {
  return {
    fontWeight:
      itemName.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [itemName, setItemName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItemName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          width: 200,
          fontSize: "0.95rem",
        }}
        className="select-input"
      >
        <Select
          className="select"
          sx={{
            height: "3.45em",
            // marginTop:"-0.9em",
            borderRadius: "0px",
            fontSize: "0.85rem",
            background:"#f1f1f1",
            border:"none",
            outline:"none"
          }}
          multiple
          // displayEmpty
          value={itemName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{itemName}</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {items.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, itemName, theme)}
              sx={{fontSize:"0.95rem"}}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
