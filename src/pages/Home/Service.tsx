import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Paragraph,
  Text,
} from "../../components";
import { styled } from "../../configs";

import aboutImage from "../../assets/about-1.png";
import aboutIcon1 from "../../assets/employment.png";
import aboutIcon2 from "../../assets/location.png";
import aboutIcon3 from "../../assets/language.png";
import aboutIcon4 from "../../assets/react.png";

const Title = styled(Box, {
  fontWeight: "bold",
  fontSize: "$title",
  textAlign: "center",
});

const AboutIcon = styled(
  ({ title, icon, ...props }: { icon: any; title: string }) => {
    return (
      <Box {...props}>
        <Flex css={{ height: 165, padding: "$s24" }} jusity="center">
          <Image src={icon} height="100%" />
        </Flex>
        <Box css={{ textAlign: "center" }}>
          <Text weight="bold" size="title">
            {title}
          </Text>
        </Box>
      </Box>
    );
  },
  {}
);

const Service = () => {
  return (
    <Container py="s32">
      <Title>私たちに関するデータ</Title>
      <Box my="s48">
        <Flex
          align="end"
          gap="s32"
          wrap={{ "@initial": "wrap", "@xxl": "nowrap" }}
        >
          <Box css={{ flexGrow: 1, minWidth: "70%", "@md": {}, "@lg": {} }}>
            <Image src={aboutImage} />
          </Box>

          <Paragraph
            align="justify"
            mb="s0"
            css={{ fontSize: 24, minWidth: 310 }}
          >
            MY Design
            はお客様の最初のドラフトで無料のデザインサービスを提供します!
          </Paragraph>
        </Flex>
      </Box>
      <Grid column={{ "@xs": 1, "@sm": 2, "@xxl": 4 }} gap="s24">
        <AboutIcon icon={aboutIcon1} title="10+ デザイナー" />
        <AboutIcon icon={aboutIcon2} title="95% 日本の顧客" />
        <AboutIcon icon={aboutIcon3} title="3 言語" />
        <AboutIcon icon={aboutIcon4} title="100％満足した顧客" />
      </Grid>
    </Container>
  );
};

export default Service;
