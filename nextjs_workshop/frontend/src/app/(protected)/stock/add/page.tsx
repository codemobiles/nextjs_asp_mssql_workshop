import { Box, Button, TextField } from "@mui/material";
import React from "react";

type Props = {};

export default function StockAddPage({}: Props) {
  return (
    <Box>
      <form>
        <TextField fullWidth label="Name" />
        <TextField fullWidth label="Price" sx={{ mt: 1 }} />
        <TextField fullWidth label="Stock" sx={{ mt: 1 }} />
        <Button variant="contained" fullWidth sx={{ mt: 8 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
