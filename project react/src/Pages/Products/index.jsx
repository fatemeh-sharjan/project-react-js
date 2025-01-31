import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards";
import { Blocks } from "react-loader-spinner";
import { Box } from "@mui/material";
export default function Products() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
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
        setProducts(data.products);
      })
      .catch(err=>console.log(err))
  }, []);
  const items = products?.map((e, index) => (
    <Cards
      key={index}
      brandName={e?.brandName}
      color={e?.colour}
      id={e?.id}
      name={e?.name}
      img={e?.imageUrl}
    />
  ));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
        padding: " 40px 0",
        backgroundColor: "#ebebeb",
        // height:"100vh",
      }}
    >
      {products ? (
        <>{items}</>
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
