import { Button, Stack } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DemoLinks = ({ demo, code }: { demo: string; code: string }) => {
  return (
    <Stack direction="row" gap="15px" paddingBottom="1rem">
      {demo && (
        <Button
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch demo"
          sx={{
            background: "linear-gradient(135deg, #ff758f 0%, #fbc2eb 100%)", // Vibrant pink gradient
            color: "#4a4a4a", // Neutral dark gray for contrast
            border: "1px solid #ff9aa2", // Complementary pink border
            borderRadius: "10rem",
            transition: "transform 0.3s, box-shadow 0.3s",
            fontWeight: "bold", // Thickens the text
            "&:hover": {
              background: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)", // Pastel hover gradient
              transform: "scale(1.1)",
              boxShadow: "0px 4px 20px rgba(255, 117, 143, 0.4)", // Subtle glowing shadow
            },
          }}
        >
          Watch Demo <ArrowForwardIcon sx={{ marginLeft: "4px" }} />
        </Button>
      )}
      {code && (
        <Button
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View code"
          sx={{
            background: "linear-gradient(135deg, #ff758f 0%, #fbc2eb 100%)", // Vibrant pink gradient
            color: "#4a4a4a", // Neutral dark gray for contrast
            border: "1px solid #ff9aa2", // Complementary pink border
            borderRadius: "10rem",
            transition: "transform 0.3s, box-shadow 0.3s",
            fontWeight: "bold", // Thickens the text
            "&:hover": {
              background: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)", // Pastel hover gradient
              transform: "scale(1.1)",
              boxShadow: "0px 4px 20px rgba(255, 117, 143, 0.4)", // Subtle glowing shadow
            },
          }}
        >
          Code <ArrowForwardIcon sx={{ marginLeft: "4px" }} />
        </Button>
      )}
    </Stack>
  );
};

export default DemoLinks;
