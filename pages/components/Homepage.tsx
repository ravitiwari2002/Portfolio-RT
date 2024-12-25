import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Link as ScrollLink, 
} from "react-scroll";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
const Homepage = () => {
  const [text, count] = useTypewriter({
    words: ["Ravi Tiwari", "Software Engineer", "Problem-Solver"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <Box sx={{ background: "rgb(36,36,36)" }}>
      <div className="h-screen  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Typography
          fontWeight="100px"
          color="white"
          textAlign={"center"}
          variant="h3"
          zIndex={0}
        >
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "grey",
            textTransform: "uppercase",
            letterSpacing: "0.8rem",
            zIndex: 0,
          }}
        >
          full-stack developer
        </Typography>

        <Stack
          direction="row"
          gap={{ md: "2rem", xs: "0.5rem" }}
          margin="0 auto"
        >
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            style={{
              padding: "0.5rem 0rem",
              border: "2px solid transparent",
              textDecoration: "none",
              color: "grey",
              borderRadius: "10rem",
            }}
          >
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out", 
                ":hover": {
                  transform: "scale(1.2)", 
                },
              }}
            >
              <Button
                sx={{
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "grey",
                  fontWeight: "50",
                  borderRadius: "10rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",

                  "&:hover": {
                    border: "2px solid #F7AB0A",
                  },
                }}
              >
                <span style={{ fontWeight: "100" }}> About</span>
              </Button>
            </Box>
          </ScrollLink>

          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            style={{
              padding: "0.5rem 0rem",
              border: "2px solid transparent",
              textDecoration: "none",
              color: "grey",
              borderRadius: "10rem",
            }}
          >
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out", 
                ":hover": {
                  transform: "scale(1.2)", 
                },
              }}
            >
              <Button
                sx={{
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "grey",
                  fontWeight: "50",
                  borderRadius: "10rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",

                  "&:hover": {
                    border: "2px solid #F7AB0A",
                  },
                }}
              >
                <span style={{ fontWeight: "100" }}> projects</span>
              </Button>
            </Box>
          </ScrollLink>

          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            duration={1500}
            style={{
              padding: "0.5rem 0rem",
              border: "2px solid transparent",
              textDecoration: "none",
              color: "grey",
              borderRadius: "10rem",
            }}
          >
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out", 
                ":hover": {
                  transform: "scale(1.2)", 
                },
              }}
            >
              <Button
                sx={{
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "grey",
                  fontWeight: "50",
                  borderRadius: "10rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  "&:hover": {
                    border: "2px solid #F7AB0A",
                  },
                }}
              >
                <span style={{ fontWeight: "100" }}> skills</span>
              </Button>
            </Box>
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            style={{
              padding: "0.5rem 0rem",
              border: "2px solid transparent",
              textDecoration: "none",
              color: "grey",
              borderRadius: "10rem",
            }}
          >
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out", 
                ":hover": {
                  transform: "scale(1.2)", 
                },
              }}
            >
              <Button
                sx={{
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "grey",
                  fontWeight: "50",
                  borderRadius: "10rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",

                  "&:hover": {
                    border: "2px solid #F7AB0A",
                  },
                }}
              >
                <span style={{ fontWeight: "100" }}> Contact</span>
              </Button>
            </Box>
          </ScrollLink>
        </Stack>
      </div>
    </Box>
  );
};

export default Homepage;
