import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton, Button } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="sticky"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex="sticky"
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <IconButton
                  key={social.icon.iconName}
                  aria-label={social.icon.iconName}
                  icon={<FontAwesomeIcon icon={social.icon} />}
                  onClick={() => window.open(social.url, "_blank")}
                />
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Button
                variant="ghost"
                onClick={handleClick("projects")}
                colorScheme="blue"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={handleClick("contactme")}
                colorScheme="blue"
              >
                Contact Me
              </Button>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
