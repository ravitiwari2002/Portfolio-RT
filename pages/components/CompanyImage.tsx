import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import BackButton from "../subcomponents/BackButton";
import Image from "next/image";

const CompanyImage = () => {
  return (
    <Grid
      container
      sx={{
        background: "rgb(36,36,36)",
      }}
    >
      {/* Back Button */}
      <BackButton />
      <Grid
        item
        xs={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* Title and Location */}
          <Typography
            variant="h4"
            color="#fcb232"
            fontWeight="bold"
            fontSize={{ md: "3.5rem", xs: "2rem" }}
            sx={{
              letterSpacing: "0.1rem",
              textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
            }}
          >
            GEICO
          </Typography>
          <Typography
            variant="subtitle1"
            color="rgba(255, 255, 255, 0.75)"
            sx={{ marginTop: "0.5rem", fontSize: "1.2rem" }}
          >
            Chevy Chase, MD
          </Typography>
          <Typography
            variant="subtitle2"
            color="rgba(255, 255, 255, 0.5)"
            sx={{
              marginTop: "0.3rem",
              fontSize: "1rem",
              fontStyle: "italic",
            }}
          >
            Jun 2023 - Aug 2023
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4} />
      {/* Image Section */}
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="2rem"
        >
          <Image
            src="/images/group.jpeg" 
            alt="Group photo"
            width={1120} // Responsive size for larger screens
            height={640} // Adjust height to maintain aspect ratio
            style={{
              borderRadius: "10px", 
            }}
            priority 
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CompanyImage;
