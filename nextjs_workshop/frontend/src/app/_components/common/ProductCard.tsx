"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductData } from "@/models/product.model";
import { productImageURL } from "@/utils/commonUtil";
import { NumericFormat } from "react-number-format";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

type Props = {
  product: ProductData;
};
export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={7}>
      <CardActionArea onClick={() => alert(JSON.stringify(product))}>
        <CardMedia sx={{ height: 240, textAlign: "center" }}>
          <Image
            src={productImageURL(product.image)}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            alt=""
          />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="line-clamp-2"
          >
            {product.name}
          </Typography>
          <Typography variant="body1">
            <NumericFormat
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale={true}
              suffix=" - "
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
