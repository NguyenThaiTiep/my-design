import React from "react";
import { Box, Container, Text } from "../../components";
import { ContactForm } from "../../components/ContactForm";
import { styled } from "../../configs";

const Title = styled(Text, {
  display: "inline-block",
  fontSize: "$title",
  fontWeight: "$bold",
});

export const ContactUs = () => {
  return (
    <Container pt="s16" py="s64">
      <Box py="s32" css={{ textAlign: "center" }}>
        <Title>お問い合わせ</Title>
      </Box>
      <ContactForm />
    </Container>
  );
};
