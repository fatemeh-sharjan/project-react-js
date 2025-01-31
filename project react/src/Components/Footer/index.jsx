import { Stack, Box, Link, Typography, Button } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Stack
        sx={{
          width: "100vw",
          height:{xs:'900px',md:'650px'},
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "80vw",
            height: "200px",
            display: "flex",
            // backgroundColor:'#ccc',
            justifyContent: { xs: "space-around", md: "space-between" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "250px",
              width: "200px",
              justifyContent: "space-evenly",
              // bgcolor:'gray'

            }}
          >
            <Box
              component={"img"}
              src="assets/LOGO1.png"
              sx={{ width: "100px", height: "40px" }}
            ></Box>
            <Link sx={{ color: "white" }} underline="hover">
              Newsletter
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Site Map
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Subscribe
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Giveaways
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "200px",
              justifyContent: "space-between",
              //  bgcolor:'#ccc'
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "200px",
                justifyContent: "space-between",
                // bgcolor:'#ccc'

              }}
            >
              <Box
                component={"img"}
                src="assets/tiktok.png"
                sx={{ width: "20px", height: "20px" }}
              ></Box>
              <Box
                component={"img"}
                src="assets/youtubee.webp"
                sx={{ width: "20px", height: "20px" }}
              ></Box>
              <Box
                component={"img"}
                src="assets/fasebooke.png"
                sx={{ width: "20px", height: "20px" }}
              ></Box>
              <Box
                component={"img"}
                src="assets/instagramm.webp"
                sx={{ width: "20px", height: "20px" }}
              ></Box>
              <Box
                component={"img"}
                src="assets/pinterstt.webp"
                sx={{ width: "20px", height: "20px" }}
              ></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Link sx={{ color: "white" }} underline="hover">
                Contact Us
              </Link>
              <Link sx={{ color: "white" }} underline="hover">
                Community Guidelines
              </Link>
              <Link sx={{ color: "white" }} underline="hover">
                Give a Gift
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-evenly",
              // bgcolor:'green',
              width: "200px",
            }}
          >
            <Link sx={{ color: "white" }} underline="hover">
              Media Kit
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Advertise Online
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Events & Promotions
            </Link>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                width: "200px",
              },
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-evenly",
              // bgcolor:'red'
            }}
          >
            <Link sx={{ color: "white" }} underline="hover">
              Press Room
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Customer Service
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Other Hearst Subscriptions
            </Link>
          </Box>
        </Box>

        {/* دوم */}

        <Box
          sx={{
            width: "80vw",
            height: {xs:'500px',md:'350px'},
            marginTop:'20px',
            display: "flex",
            // backgroundColor:'green',
            justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            gap:'10px'
          }}
        >
          <Box
            sx={{
              width: "200px",
              height: "200px",
              
            }}
            component={"img"}
            src="https://www.elle.com/_assets/design-tokens/elle/static/images/logos/network-logo.242fea1.svg?primary=%2523ffffff"
          ></Box>
          <Box sx={{ color: "white" }}>
            <Typography fontSize="medium">
              A Part of Hearst Digital Media
              <br />
              We may earn commission from links on this page, but we only
              recommend products we back.
              <br />
              ©2024 Hearst Magazine Media, Inc. All Rights Reserved.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection:{xs:'column',md:'row'},
              alignItems: {xs:'left',md:'center'},
              width: "100%",
              fontSize: "medium",
              height: "200px",
              // bgcolor:'red'
            }}
          >
            <Link sx={{ color: "white" }} underline="hover">
              Privacy Notice
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              CA Notice at CollectionYour
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Your CA Privacy Rights/Shine the LightDAA
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              DAA Industry Opt OutTerms of UseSite Map
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Terms of Use
            </Link>
            <Link sx={{ color: "white" }} underline="hover">
              Site Map
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: {xs:'end',md:'center'},
              justifyContent: "center",
              width: "200px",
              height: "150px",
            }}
          >
            <Button
              sx={{
                color: "white",
                width: "180px",
                height: "50px",
                border: "1px solid white",
              }}
            >
              Cookies Choices
            </Button>
          </Box>
        </Box>
      </Stack>
    </footer>
  );
}
