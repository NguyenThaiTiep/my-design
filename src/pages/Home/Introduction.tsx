import React from "react";
import { Col } from "react-bootstrap";
import {
  Box,
  Flex,
  Text,
  Container,
  Image,
  Paragraph as BaseParagraph,
} from "../../components";

import introductImage from "../../assets/introduction.png";
import { styled } from "../../configs";

const Parapgraph = styled(BaseParagraph, {
  maxWidth: "100% !important",
  textAlign: "justify",
  pr: "s20",
  lineHeight: "28px",
  letterSpacing: "4px",
});

const Title = styled(Text, {
  display: "inline-block",
  fontWeight: "bold",
  marginBottom: "$s8",
  fontSize: 20,
});

const Introduction = () => {
  return (
    <Box backgroundColor="white" py="s20">
      <Container center py="s24">
        <Flex py="s20" block wrap="wrap">
          <Col md={5} xs={12}>
            <Image src={introductImage} width="100%" />
          </Col>
          <Col md={7} xs={12}>
            <Flex
              direction="column"
              css={{ height: "100%", paddingLeft: "$s64" }}
              gap="s24"
              jusity="start"
            >
              <Parapgraph>
                MY Designは英語で「Me＆You
                Design」という意味です。製品の価値は私たちとお客様の間のコネクトから生まれると信じています。
              </Parapgraph>
              <Parapgraph>
                <Title>ヴィジョン:</Title>
                <Box>創造があるところにMY Designがあります。</Box>
              </Parapgraph>
              <Parapgraph>
                <Title>ミッション:</Title>
                <Box>
                  MY
                  Designのミッションはお客様がデザインの分野でコストと時間を最適化できるよう支援することです。
                </Box>
              </Parapgraph>
              <Parapgraph>
                MY Designは常にお客様のアイデアを実現するために利用できます。
              </Parapgraph>
            </Flex>
          </Col>
        </Flex>
      </Container>
    </Box>
  );
};

export default Introduction;
