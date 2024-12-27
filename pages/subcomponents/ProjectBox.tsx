import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Skills from "./Skills";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import DemoLinks from "./demoLinks";
import { CodeBlock, dracula } from "react-code-blocks";

const Project = ({
  title,
  link,
  src,
  description,
  demo,
  code,
  skills,
}: {
  title: string;
  link: string;
  src: string;
  description: string;
  demo: string;
  code: string;
  skills: Array<string>;
}) => {
  return (
    <Box
      width="500px"
      paddingLeft={{ md: "2rem", xs: "0.1rem" }}
      paddingRight={{ md: "2rem", xs: "0.1rem" }}
      sx={{ background: "#1d1d1f" }}
    >
      <Typography
        color="white"
        variant="h4"
        padding="1rem"
        textAlign={"center"}
      >
        {title}
      </Typography>
      <Link
        href={link}
        target="_blank"
        sx={{
          cursor: "pointer",
        }}
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className=" object-cover md:rounded-lg  overflow-hidden"
        >
          <Image
            src={src}
            alt="project"
            width={850}
            height={550}
            style={{ borderRadius: "2rem" }}
            layout="responsive"
          />
        </motion.div>
      </Link>
      <Skills skills={skills} />
      <Typography color="white" marginTop="1rem" paddingBottom="1rem">
        {description}
      </Typography>

      <DemoLinks demo={demo} code={code} />
    </Box>
  );
};



const ProjectBox = () => {
  return (
    <Grid
      container
      direction="row"
      marginTop="2rem"
      gap="3rem"
      display="flex"
      justifyContent={"center"}
    >
      <Project
        title="Stock Bot"
        link=""
        src="/images/stockbot.png"
        description="Know about the stock market. Talk with the chatbot and forecast stock prices upto 10 years."
        demo=""
        code="https://github.com/ravitiwari2002/StockBot"
        skills={["Python", "Streamlit", "Flask"]}
      />
      <Project
        title="Crypto Pulse"
        link=""
        src="/images/crypto.png"
        description="CryptoPulse is your ultimate cryptocurrency companion. Check real-time market data and manage your portfolio."
        demo=""
        code="https://github.com/ravitiwari2002/CryptoPulse/"
        skills={["Swift"]}
      />
      <Project
        title="Whispr"
        link=""
        src="/images/whisper.png"
        description="Want to talk with strangers annonymously? Whispr is the place for you. Chat with people around the world."
        demo=""
        code="https://github.com/ravitiwari2002/Whispr"
        skills={["Flutter","Dart", "Firebase"]}
      />
      
      <Project
        title="Pair Pursuit"
        link=""
        src="/images/match.png"
        description="Want to test your memory? Pair Pursuit is the place for you. Match the cards and win."
        demo=""
        code="https://github.com/ravitiwari2002/Pair-Pursuit"
        skills={["JavaScript", "HTML5", "Bootstrap"]}
      />

      <Project
        title="Trip Planner"
        link=""
        src="/images/travel.png"
        description="Find ETA and distance, current weather, and information about the country while you are on the trip."
        demo=""
        code="https://github.com/ravitiwari2002/Travel-Planner"
        skills={["JavaScript", "Web API"]}
      />

      <Project
        title="Wordle"
        link=""
        src="/images/wordle.png"
        description="Like to play Wordle? But we have a twist. You can choose the theme, difficulty and the number of guesses."
        demo=""
        code="https://github.com/ravitiwari2002/Wordle-Part-2"
        skills={["Swift"]}
      />
    </Grid>
  );
};

export default ProjectBox;
