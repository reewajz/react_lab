import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardComponent = ({ title, description, imageSrc }) => {
  const onClickHandler = () => {
    // Open the URL in a new tab when the button is clicked
    window.open("http://www.github.com", "_blank");
  };
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={imageSrc} alt="project" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="ghost" colorScheme="blue" onClick={onClickHandler}>
          see more..
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
