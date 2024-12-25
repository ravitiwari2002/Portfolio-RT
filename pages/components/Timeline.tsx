import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import timelineData from "../data/timelineData";

const Timeline = () => {
  return (
    <Grid container sx={{ background: "rgb(36,36,36)", padding: "2rem" }}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Box
          sx={{
            width: { xs: "90%", sm: "80%", md: "70%" },
            position: "relative",
          }}
        >
          {/* Vertical Line in the Middle */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
              width: "4px",
              backgroundColor: "#fcb232",
              display: { md: "block", xs: "none" },
            }}
          />
          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                position: "relative",
                marginBottom: "3rem",
              }}
            >
              {/* Timeline Content Box */}
              <Box
                sx={{
                  width: { xs: "100%", md: "45%" },
                  padding: "1rem 2rem",
                  backgroundColor: "rgba(251, 194, 135, 0.16)",
                  borderRadius: "1rem",
                  border: "1px solid #fcb232",
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left", // Aligns text to the left
                }}
              >
                {/* Date */}
                <Typography
                  variant="h6"
                  color="#fcb232"
                  fontWeight="bold"
                  sx={{ marginBottom: "0.5rem" }}
                >
                  {item.date}
                </Typography>
                {/* Description */}
                <Typography
                  color="white"
                  sx={{
                    whiteSpace: "pre-line", // Retains line breaks
                    lineHeight: "1.8", // Improves spacing between lines
                    marginLeft: "1rem", // Indents the bullet points
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
              {/* Circular Marker */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left:
                    index % 2 === 0 ? "calc(50% - 1rem)" : "calc(50% - 0.2rem)",
                  transform: "translateY(-50%)",
                  backgroundColor: "#fcb232",
                  borderRadius: "50%",
                  height: "20px",
                  width: "20px",
                  zIndex: 2,
                  border: "4px solid rgb(36,36,36)",
                  display: { md: "block", xs: "none" },
                }}
              />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Timeline;
