import { Box, Typography } from "@mui/material";
import React from "react";
import AboutBox from "../subcomponents/AboutBox";
const About = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: "5rem",
          background: "rgb(36,36,36)",
          paddingBottom: "10rem",
          paddingLeft: { md: "10rem", sm: "4rem", xs: "2rem" },
          paddingRight: { md: "10rem", sm: "4rem", xs: "2rem" },
        }}
      >
        <Typography
          variant="h4"
          color="rgb(107 114 128/var(--tw-text-opacity))"
          letterSpacing={"10px"}
          fontWeight="100"
          textAlign={"center"}
          fontSize="2.5rem"
          textTransform={"uppercase"}
        >
          About
        </Typography>
        {}
        <AboutBox />
      </Box>
    </>
  );
};

export default About;
