import { Box, Button, TextField } from "@mui/material";
import React from "react";

type Props = {};

export default function StockAddPage({}: Props) {
  return (
    <Box>
      <form>
        <TextField fullWidth label="Name" />
        <Button variant="contained" fullWidth sx={{ mt: 8 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
