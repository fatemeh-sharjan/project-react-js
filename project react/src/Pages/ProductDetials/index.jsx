import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Blocks } from "react-loader-spinner";
import { Box } from "@mui/material";
import Swipper from "../../Components/Swipper";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,
      {
        method: "GET",
        headers: {
        'x-rapidapi-key': '14d908bc58msh85a53dd620ae6eep1683e5jsn58d347edc110',
		'x-rapidapi-host': 'asos2.p.rapidapi.com'
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <Box>
      {product ? (
        <Swipper
        product={product}
        name={product?.name}
        id={product?.id}
        brandName={product?.brand?.name}
        description={product?.brand?.description}
        price={product?.price?.current?.text}
        imgI={product?.media?.images[0]?.url}
        imgII={product?.media?.images[1]?.url}
        imgIII={product?.media?.images[2]?.url}
        imgIIII={product?.media?.images[3]?.url}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Blocks width="150px" height="150px" />
        </Box>
      )}
    </Box>
  );
}
