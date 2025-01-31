import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slice/CartSlice";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";

export default function Swipper({
  name,
  id,
  brandName,
  description,
  price,
  product,
  imgI,
  imgII,
  imgIII,
  imgIIII,
}) {
  const pr = useSelector((State) => State.cart.list).filter((e) => e.id === id);
  let quantity = pr[0]?.quantity;
  const dispatch = useDispatch();
  const divDes = useRef();
  useEffect(() => {
    description === undefined
      ? (divDes.current.innerHTML = "...")
      : (divDes.current.innerHTML = `${description}`);
  }, [description]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "800px",
        width: "100vw",
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "800px",
          width: "95vw",
          backgroundColor: "rgb(228, 228, 228))",
          marginTop: "20px",
          marginBottom: "20px",
          // gap: "20px",
        }}
      >
        <Swiper
          direction={"vertical"}
          mousewheel={true}
          modules={[Mousewheel, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          <Box>
            <SwiperSlide>
              <Box component="img" src={"https://" + imgI}></Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box component="img" src={"https://" + imgII}></Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box component="img" src={"https://" + imgIII}></Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box component="img" src={"https://" + imgIIII}></Box>
            </SwiperSlide>
          </Box>
        </Swiper>
        <Box
          sx={{
            width: "90vw",
            height: "700px",
            gap: "10px",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CardContent   sx={{
            gap: "20px",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
          }}>
            {" "}
            <Typography
              component="div"
              variant="h5"
              sx={{ fontSize: { xs: "30px", md: "50px" }  ,color:"black"}}
            >
              {name}
            </Typography>
            <Typography
              component="div"
              variant="h4"
              sx={{ fontSize: { xs: "20px", md: "35px"}  ,color:"black"}}
            >
              {brandName}
            </Typography>
            <Box
              sx={{
                visibility: description ? "visible" : "hidden",
                color: "black",
                textAlign: "justify",
              }}
              ref={divDes}
              color={"primary"}
              variant="body2"
            >
              <span id="price">{price}</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "3px",
                marginTop: "30px",
              }}
            >
              <Button
                sx={{ width: "60px", height: "45px" }}
                variant="contained"
                color="error"
                onClick={() => dispatch(removeItem(product?.id))}
                disabled={!+quantity ? true : false}
              >
                -
              </Button>
              {quantity && (
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    color:"black",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {quantity}
                </span>
              )}
              <Button
                sx={{ width: "60px", height: "45px" }}
                variant="contained"
                color="success"
                onClick={() => dispatch(addItem(product))}
              >
                +
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
