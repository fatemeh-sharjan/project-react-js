import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  Box,
  IconButton,
  Drawer,
  Typography,
  Badge,
  // Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Shop2Icon from "@mui/icons-material/Shop2";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";
import { useSelector } from "react-redux";
export default function NavBar() {
  const cartLength = useSelector((state) => state.cart.list).length;

  const { token, handleLogin } = useContext(AuthContext);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: "100vw",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Toolbar
          sx={{
            width: "80vw",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              // backgroundColor: "green",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // gap: "0px",
                width: "30%",
                // backgroundColor: "#ccc",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                aria-label="logo"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon fontSize="large" sx={{ color: "black" }} />
              </IconButton>
              <Drawer
                open={isDrawerOpen}
                anchor="left"
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{
                    p: "2",
                    width: "300px",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    role: "presentation",
                  }}
                >
                  <Typography variant="h6" component="div">
                    MENU
                  </Typography>
                </Box>

                <Box
                  variant="h5"
                  component={"div"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "200px",
                    // backgroundColor:'#ccc'
                  }}
                >
                  <Link to={"/"}>
                    <Button
                      sx={{
                        color: "black",
                        fontSize: "medium",
                        border: "1px solid black",
                        width: "150px",
                        height: "80px",
                      }}
                    >
                      HOME
                    </Button>
                  </Link>
                </Box>
                <Box
                  variant="h5"
                  component={"div"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "200px",
                  }}
                >
                  <Link to={"/products"}>
                    <Button
                      sx={{
                        color: "black",
                        fontSize: "medium",
                        border: "1px solid black",
                        width: "150px",
                        height: "80px",
                      }}
                    >
                      PRODUCTS
                    </Button>
                  </Link>
                </Box>
                <Box
                  variant="h5"
                  component={"div"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "200px",
                    // backgroundColor: "#ccc",
                  }}
                >
                  <Link to={"/login-register"}>
                    <Button
                      sx={{
                        color: "black",
                        fontSize: "medium",
                        border: "1px solid black",
                        width: "150px",
                        height: "80px",
                      }}
                    >
                      LOGIN
                    </Button>
                  </Link>
                </Box>
              </Drawer>
              <Link to={"/"}>
                <Box
                  component={"img"}
                  // src="assets/logo.png"
                  src="	https://www.elle.com/_assets/design-tokens/elle/static/images/logos/logo.2856426.svg?primary=navLogoColor"
                  sx={{ width: "90px", height: "45px" }}
                ></Box>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: {
                  xs: "0px",
                  md: "15px",
                  lg: "15px",
                },
                width: "30%",
                // backgroundColor:'red'
              }}
            >
              <Link to={"/"}>
                <Button sx={{ color: "black", fontSize: "medium" }}>
                  HOME
                </Button>
              </Link>
              <Link to={"/products"}>
                <Button
                  sx={{
                    color: "black",
                    fontSize: "medium",
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                  }}
                >
                  products
                </Button>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "30%",
                // backgroundColor: "#ccc",
              }}
            >
              {token ? (
                <span onClick={() => handleLogin(null)}>
                  <Box
                    sx={{
                      width: "100px",
                      height: "40px",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      border: "1px solid black",
                      backgroundColor: "black",
                      fontSize: "medium",
                    }}
                  >
                    LOGOUT
                  </Box>
                </span>
              ) : (
                <Link to={"/login-register"}>
                  <Box
                    sx={{
                      width: "100px",
                      height: "40px",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      border: "1px solid black",
                      backgroundColor: "black",
                      fontSize: "medium",
                    }}
                  >
                    LOGIN
                  </Box>
                </Link>
              )}
              <Link to={"/cart"}>
                <Badge
                  anchorOriginTopRight
                  badgeContent={cartLength}
                  color="error"
                  overlap="circular"
                  variant="standard"
                >
                  <Button
                    sx={{
                      width: "100px",
                      height: "40px",
                      color: "black",
                      fontSize: "medium",
                      border: "1px solid black",
                      display: {
                        xs: "none",
                        md: "flex",
                      },
                    }}
                    endIcon={<Shop2Icon fontSize="large" />}
                  >
                    {cartLength !== 0 && <span>{cartLength}</span>}
                    CART
                  </Button>
                </Badge>
              </Link>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
