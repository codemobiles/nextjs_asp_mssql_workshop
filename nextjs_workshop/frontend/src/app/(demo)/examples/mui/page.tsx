import { Stack, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

type Props = {};

export default function MuiPage({}: Props) {
  //   BasicButtons({ lable: "1234" });

  return (
    <div>
      <BasicButtons lable="Hey" color="purple" />
    </div>
  );
}

type BasicButtonsProps = {
  lable: string;
  color: string;
};
function BasicButtons({ lable, color }: BasicButtonsProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" style={{ backgroundColor: color }}>
        {lable}
      </Button>
    </Stack>
  );
}
