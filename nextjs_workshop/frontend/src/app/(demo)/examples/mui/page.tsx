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

type BasicButtonsProps = {
  lable: string;
};
function BasicButtons(props: BasicButtonsProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{props.lable}</Button>
    </Stack>
  );
}
