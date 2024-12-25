import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutBox = () => {
  const aboutData = [
    {
      src: "/images/asuLogo.png",
      name: "Arizona State University",
      heading: "Bachelor of Science in Computer Science",
      date: "2020 - 2024",
      description:
        "I studied Data Structures and Algorithms, Distributed System, and System Design. I'm into full-stack development and solve real-world problems through technology.",
    },
    {
      src: "/images/nasa.png",
      name: "NASA",
      heading: "Computer Hardware Engineer",
      date: "2023 - 2024",
      description: "Participated in NASA L'SPACE MCA and NPWEE programs.",
    },
    {
      src: "/images/geico.png",
      name: "GEICO",
      heading: "Software Engineer",
      date: "2023 - 2023",
      description: "SDP Intern @ GEICO.",
      url: "/geico",
    },
    {
      src: "/images/247.png",
      name: "247ERICPOINTCOM",
      heading: "Software Engineer",
      date: "2023 - 2023",
      description: "SWE Intern @ 247ERICPOINTCOM.",
    },
    {
      src: "/images/java.png",
      name: "Teaching Assistant",
      heading: "Object Oriented Programming | Data Structures and Algorithms",
      date: "2022 - 2022",
      description:
        "Guided 150+ ASU students in mastering Data Structures and Algorithms and OOPS concepts.",
    },
    {
      src: "/images/chess.png",
      name: "Competitive Chess Player",
      heading: "Collegiate Chess League",
      date: "2020 - 2024",
      description:
        "Represented ASU Team in Collegiate Chess League for 4 years.",
    },
    {
      src: "/images/codepath.jpeg",
      name: "CodePath Alumni",
      heading: "iOS Development, Technical Interview Prep",
      date: "2023 - Present",
      description:
        "Built iOS apps and honed technical interview skills with a focus on algorithms and problem-solving.",
    },
  ];
  return (
    <Stack>
      {aboutData?.map((experience, idx) => (
        <motion.div
          key={idx}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" object-cover md:rounded-lg overflow-hidden"
        >
          <AboutMeSection
            key={idx}
            name={experience.name}
            description={experience.description}
            heading={experience.heading}
            src={experience.src}
            date={experience.date}
            url={experience.url}
          />
        </motion.div>
      ))}
    </Stack>
  );
};

const AboutMeSection = ({
  name,
  description,
  heading,
  src,
  date,
  url,
}: {
  name: string;
  description: string;
  heading: string;
  src: string;
  date: string;
  url: string | undefined;
}) => {
  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      sx={{
        background: "#1d1d1f",
        marginTop: "2rem",
        padding: "2rem",
        borderRadius: "1rem",
      }}
    >
      <img
        src={src}
        alt="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          width: "100px",
          height: "100px",
        }}
      />
      <Stack paddingLeft={{ md: "2rem" }} paddingTop="1rem" width="100%">
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            paddingBottom="0rem"
            marginBottom="0rem"
            sx={{ color: "#f5f5f5" }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              color: "#f5f5f5",
              fontStyle: "italic",
            }}
          >
            {date}
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ color: "#f5f5f5" }}>
          {heading}
        </Typography>
        <Typography
          sx={{
            display: { xs: "block", md: "none" },
            color: "#f5f5f5",
            padding: { md: "0.5rem" },
          }}
        >
          {date}
        </Typography>
        <Typography sx={{ color: "#f5f5f5", paddingTop: "0.5rem" }}>
          {description}
        </Typography>
        {url && (
          <Button
            href={url}
            sx={{
              background: "linear-gradient(135deg, #ff758f 0%, #fbc2eb 100%)",
              color: "#3c3c3c", // Slightly darker for contrast
              fontWeight: "bold",
              border: "1px solid #ff9aa2",
              borderRadius: "10rem",
              transition: "transform 0.3s, box-shadow 0.3s",
              marginTop: "1rem",
              width: "12rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              "&:hover": {
                background: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
                transform: "scale(1.1)",
                boxShadow: "0px 4px 20px rgba(255, 117, 143, 0.4)",
              },
            }}
          >
            My Experience <ArrowForwardIcon />
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default AboutBox;
