import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Skill from "../subcomponents/Language";

const Languages = () => {
  const skills = [
    { url: "/images/react.jpeg", name: "React.js" },
    { url: "/images/typescript.png", name: "TypeScript" },
    { url: "/images/node.png", name: "Node.js" },
    { url: "/images/vanilla.png", name: "Vanilla JS" },
    { url: "/images/java.png", name: "Java" },
    { url: "/images/c-sharp.png", name: "C#" },
    { url: "/images/python.png", name: "Python" },
    { url: "/images/c++.png", name: "C++" },
    { url: "/images/swift.png", name: "Swift" },
    { url: "/images/devops.png", name: "Azure DevOps" },
    { url: "/images/aws.png", name: "AWS" },
    { url: "/images/spring.png", name: "Spring" },
    { url: "/images/stream.png", name: "Streamlit" },
    { url: "/images/django.png", name: "Django" },
    { url: "/images/mysql.png", name: "MySQL" },
    { url: "/images/firebase.png", name: "Firebase" },
    
    
  ];

  return (
    <>
      <Box sx={{ background: "rgb(36,36,36)" }}>
        <Typography
          variant="h4"
          color="rgb(107 114 128/var(--tw-text-opacity))"
          letterSpacing={"10px"}
          fontWeight="100"
          textAlign={"center"}
          fontSize="2.5rem"
          textTransform={"uppercase"}
          paddingTop="5rem"
          paddingBottom="5rem"
        >
          Skills
        </Typography>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="  flex flex-col justify-center text-center md:text-left xl:flex-row max-w-[2000] xl:px-10 xl:space-y-0 items-center"
        >
          <div className="grid grid-cols-4 gap-5">            
            {skills?.slice(0, skills.length / 2).map((skill) => (
              <Skill key={skill.name} url={skill.url} name={skill.name} />
            ))}
            {skills?.slice(skills.length / 2, skills.length).map((skill) => (
              <Skill
                key={skill.name}
                url={skill.url}
                name={skill.name}
                directionLeft
              />
            ))}
          </div>
        </motion.div>
      </Box>
    </>
  );
};

export default Languages;
