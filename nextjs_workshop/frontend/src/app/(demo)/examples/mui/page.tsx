import { Stack, Button } from "@mui/material";
import React from "react";

type Props = {};

export default function MuiPage({}: Props) {
  return (
    <div>
      <BasicButtons />
    </div>
  );
}

function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
