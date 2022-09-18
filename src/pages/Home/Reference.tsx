import React from "react";
import { Box, Flex, Grid, Text, Container } from "../../components";

import reference1 from "../../assets/reference-1.png";
import reference2 from "../../assets/reference-2.png";
import reference3 from "../../assets/reference-3.png";

import story1 from "../../assets/story-1.png";
import story2 from "../../assets/story-2.png";
import story3 from "../../assets/story-3.png";
import story4 from "../../assets/story-4.png";

import { Image } from "../../components/Image";
import { styled } from "../../configs";

const GridWrapper = styled(Box, {
  "&:before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: 200,
    maxHeight: "50%",
    backgroundColor: "$white",
  },
});

const ImageWrapper = styled(Box, {});

const StoryImageWrapper = styled(Box, {
  py: "$s16",
  display: "grid",
  gridTemplateAreas: `"img1 img2" "img3 img4"`,
  gap: "$s64 $s16",
});

const Title = styled(Text, {
  fontWeight: "bold",
  letterSpacing: "1.5rem",
  fontSize: "$title",
});
const TitleWrapper = styled(Box, {
  paddingRight: "$s64",
  borderBottom: "3px solid $textColor",
  display: "inline-block",
  width: "fit-content",
  paddingBottom: "$s4",
  color: "$textColor",
});
const Reference = () => {
  return (
    <Box px="s4" py="s4">
      <Container center pb="s32">
        <TitleWrapper>
          <Title>参照設計</Title>
        </TitleWrapper>
      </Container>
      <Box
        backgroundColor="primary"
        css={{
          position: "relative",
        }}
      >
        <GridWrapper>
          <Container center style={{ position: "relative" }}>
            <Grid column={{ "@xs": 1, "@md": 3 }} justify="center" gap="s72">
              <Flex jusity="center">
                <Image src={reference1} width="100%" />
              </Flex>
              <Flex jusity="center">
                <Image src={reference2} width="100%" />
              </Flex>
              <Flex jusity="center">
                <Image src={reference3} width="100%" />
              </Flex>
            </Grid>
          </Container>
          <Container center>
            <StoryImageWrapper>
              <ImageWrapper css={{ gridArea: "img1", paddingBottom: "15%" }}>
                <Image src={story1} width="100%" />
              </ImageWrapper>
              <ImageWrapper css={{ gridArea: "img2", marginTop: "20%" }}>
                <Image src={story3} width="100%" />
              </ImageWrapper>
              <ImageWrapper css={{ gridArea: "img3", marginTop: "-15%" }}>
                <Image src={story2} width="100%" />
              </ImageWrapper>
              <ImageWrapper css={{ gridArea: "img4", paddingBottom: "10%" }}>
                <Image src={story4} width="100%" />
              </ImageWrapper>
            </StoryImageWrapper>
          </Container>
        </GridWrapper>
      </Box>
    </Box>
  );
};

export default Reference;
