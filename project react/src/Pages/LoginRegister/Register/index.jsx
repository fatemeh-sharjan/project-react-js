import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function Register({ handlePageType }) {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "300px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // bgcolor:'red'
          }}
        >
          <Box
            sx={{
              width: "160px",
              height: "80px",
            }}
            component={"img"}
            src="https://cdn.mylo.id/brands/1a8d9102-abaf-4384-83d6-31c4c1cda435/elm-app-client-logo-w9q2hghh.svg"
          ></Box>
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component={"h4"}
        >
          please register
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "300px" }}
            type="text"
            // onChange={handleChange}
            placeholder="Email"
            required
            name="username"
          />
        </Box>
        <Box
          sx={{
            width: "300px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "300px" }}
            type="text"
            // onChange={handleChange}
            placeholder="password"
            required
            name="password"
          />
        </Box>
        <Typography
          component={"p"}
          sx={{ textAlign: "center" }}
          onClick={handlePageType}
        >
          Already have an account?
        </Typography>
        <Button
          variant="contained"
          sx={{ width: "300px", height: "50px", marginTop: "20px" }}
        >
          Login
        </Button>
      </Box>
    </>
  );
}
