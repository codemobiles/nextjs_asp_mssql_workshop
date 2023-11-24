import { Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
};

export default function StockCard(props: Props) {
  return (
    <Stack direction="row">
      <Stack direction="column" color={props.color}>
        <Typography>{props.title}</Typography>
        <Typography>{props.subtitle}</Typography>
      </Stack>
      <props.icon />
    </Stack>
  );
}
