import React from "react";

type Props = {};

export default function MuiPage({}: Props) {
  return (
    <div className="text-red-400 bg-yellow-500 w-[100px] m-3 text-center rounded-md">
      MuiPage
    </div>
  );
}



import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}