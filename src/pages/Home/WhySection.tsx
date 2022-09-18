import React from "react";
import { Box, Container, Image } from "../../components";
import conversation from "../../assets/conversation.png";

const WhySection = () => {
  return (
    <Box backgroundColor="black">
      <Container>
        <Image src={conversation} width="100%" />
      </Container>
    </Box>
  );
};

export default WhySection;
