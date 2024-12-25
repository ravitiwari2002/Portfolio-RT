import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  return (
    <Grid
      item
      xs={4}
      display="flex"
      alignItems="center"
      sx={{ background: "rgb(36,36,36)" }}
    >
      <Button
        href="/"
        sx={{
          background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", // Vibrant, playful pink variation
          color: "#4a4a4a", // Neutral dark gray for contrast
          border: "1px solid #ff758f", // Deep pink border for boldness
          borderRadius: "10rem",
          transition: "transform 0.3s, box-shadow 0.3s",
          marginLeft: "2rem",
          width: { md: "8rem", xs: "6rem" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px", // Small gap between text and icon
          "&:hover": {
            background: "linear-gradient(135deg, #ff758f 0%, #fbc2eb 100%)", // Bright, engaging pink gradient for hover
            transform: "scale(1.1)",
            boxShadow: "0px 4px 20px rgba(255, 117, 143, 0.4)", // Subtle glowing shadow
          },
        }}
      >
        <ArrowBackIcon />
        <Typography
          component="span"
          sx={{
            fontWeight: "bold", // Makes the text thick
            fontSize: "0.875rem", // Keeps the font size compact
          }}
        >
          Back
        </Typography>
      </Button>
    </Grid>
  );
};

export default BackButton;
