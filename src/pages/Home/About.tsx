import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  Grid,
  Paragraph,
} from "../../components";

import imageAbout from "../../assets/about-1.png";
import workflowImage from "../../assets/design-service.png";
import teamflowImage from "../../assets/hm-service.png";
import requestImage from "../../assets/process.png";
import { Col } from "react-bootstrap";
import { styled } from "../../configs";

const Title = styled(Text, {
  fontSize: "$title",
  fontWeight: "bold",
  color: "black",
  lineHeight: "30px",
  marginBottom: "$s16",
  display: "inline-block",
  variants: {
    border: {
      true: {
        borderBottom: "3px solid $textColor",
      },
    },
  },
});

const Subtitle = styled(Text, {
  display: "inline-block",
  fontSize: 20,
  marginBottom: "$s16",
  marginTop: "$s24",
  fontWeight: "bold",
});

const Center = styled(Box, {
  textAlign: "center",
});

const FlowBox = styled(Box, {
  display: "flex",
  minWidth: "50%",
  flexDirection: "column",
  height: "100%",
  py: "$s16",
  px: "$s16",
  "@lg": {
    px: "$s48",
  },
  variants: {
    bgc: {
      primary: {
        backgroundColor: "$primary",
      },
      secodary: {
        backgroundColor: "$secondary",
      },
    },
  },
});

const ConvarationWrapper = styled(Box, {
  maxWidth: 600,
  variants: {
    align: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
  },
});

const Square = styled(Box, {
  aspectRatio: "4/3",
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
  py: "$s16",
});
const FlowImageWrapper = styled(Box, {
  width: "100%",
  border: "9px solid $textColor",
  borderRadius: 40,
  py: "$s24",
  px: "$s16",
  height: "fit-content",
});

const Name = styled(Text, {
  display: "inline-block",
  fontWeight: "bold",
  minWidth: 100,
  marginRight: "$s16",
  marginBottom: "$s8",
});

const Divider = styled(
  ({ ...props }) => {
    return (
      <Flex wrap="wrap" {...props}>
        <Col md={6} xs={12}>
          <FlowBox bgc="primary" px="s0">
            <Flex gap="s48" jusity="end" align="center">
              <Box className="dot" />
              <Box className="dot" />
              <Box className="divider right" />
            </Flex>
          </FlowBox>
        </Col>
        <Col md={6} xs={12}>
          <FlowBox bgc="secodary" px="s0">
            <Flex gap="s48" jusity="start" align="center">
              <Box className="divider left" />
              <Box className="dot" />
              <Box className="dot" />
            </Flex>
          </FlowBox>
        </Col>
      </Flex>
    );
  },
  {
    ".dot": {
      width: "0.75rem",
      height: "0.75rem",
      backgroundColor: "$textColor",
      borderRadius: "100%",
    },
    ".divider": {
      height: "0.5rem",
      width: 150,
      backgroundColor: "$textColor",

      "&.right": {
        borderRadius: "0.5rem 0 0 0.5rem ",
      },
      "&.left": {
        borderRadius: "0  0.5rem  0.5rem 0 ",
      },
    },
  }
);

const WorkFlow = () => {
  return (
    <Box>
      <Center css={{ height: 60 }}>
        <Title>???????????????????????????</Title>
        <Box>
          <Text
            block
            backgroundColor="secondary"
            px="s4"
            css={{
              fontSize: "$title",
            }}
          >
            ????????????????????????
          </Text>
        </Box>
      </Center>
      <Square>
        <FlowImageWrapper>
          <Image src={workflowImage} width="100%" />
        </FlowImageWrapper>
      </Square>
      <Box px={{ "@xl": "s24" }}>
        <Subtitle>MY Design ???????????????:</Subtitle>
        <Box>
          <Flex>
            <Name>?????????:</Name>
            <Paragraph align="justify">
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????50??????????????????????????????
            </Paragraph>
          </Flex>
          <Flex>
            <Name>?????????:</Name>
            <Paragraph align="justify">
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </Paragraph>
          </Flex>
          <Flex>
            <Name>?????????:</Name>
            <Paragraph align="justify">
              24???????????????????????????????????????????????????????????????
            </Paragraph>
          </Flex>
          <Flex>
            <Name>??????:</Name>
            <Paragraph align="justify">
              ?????????????????????????????????????????????????????????????????????????????????...
            </Paragraph>
          </Flex>
          <Flex>
            <Name css={{ minWidth: 200 }}>???????????????????????????:</Name>
            <Paragraph align="justify">
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </Paragraph>
          </Flex>
          <Name>?????????????????????</Name>
        </Box>
      </Box>
    </Box>
  );
};

const TeamFlow = () => {
  return (
    <Box>
      <Center css={{ height: 60 }}>
        <Title border>??????????????????</Title>
      </Center>
      <Square>
        <Box css={{ "@lg": { width: "70%", minWidth: 400 } }}>
          <FlowImageWrapper css={{ px: "$s48" }}>
            <Image src={teamflowImage} />
          </FlowImageWrapper>
        </Box>
      </Square>
      <Box>
        <Subtitle>MY Design ??????????????????????????????????????????:</Subtitle>
        <Box>
          <Grid column={{ "@md": 2, "@xs": 1 }} gapX="s32" gapY="s8">
            <Box>
              <Name>?????????:</Name>
              <Paragraph>
                ????????????????????????????????????????????????????????????????????????????????????????????????50??????????????????????????????
              </Paragraph>
            </Box>

            <Box>
              <Name>?????????:</Name>
              <Paragraph>
                MY Design
                ????????????????????????????????????3??????????????????????????????AI???PS??????????????????????????????????????????
              </Paragraph>
            </Box>
            <Box>
              <Name>???????????????100???:</Name>
              <Paragraph>
                ???????????????????????????????????????????????????????????????MY Design
                ???????????????????????????????????????????????????????????????????????????????????????
              </Paragraph>
            </Box>
            <Box>
              <Name>???????????????????????????:</Name>
              <Paragraph>
                ??????????????????????????????????????????????????????????????????
              </Paragraph>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const RequestFlow = styled(
  ({ ...props }) => {
    return (
      <Box {...props}>
        <Subtitle>??????????????????:</Subtitle>
        <Grid className="request-flow" align="center">
          <Box css={{ gridArea: "step" }}>
            <Image src={requestImage} width="100%" />
          </Box>
          <Paragraph css={{ gridArea: "step1" }} className="step">
            ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <Paragraph css={{ gridArea: "step2" }} className="step">
            ???????????????????????????????????????????????????/?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <Paragraph css={{ gridArea: "step3" }} className="step">
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <Paragraph css={{ gridArea: "step4" }} className="step">
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Paragraph>
          <Paragraph css={{ gridArea: "step5" }} className="step">
            ??????????????????????????????????????????????????????????????????
          </Paragraph>
        </Grid>
      </Box>
    );
  },
  {
    ".request-flow": {
      gridTemplateAreas: `"step step1 step1 step1 step1" "step step2 step2 step2 step2" "step step3 step3 step3 step3" "step step4 step4 step4 step4" "step step5 step5 step5 step5"
      `,
    },
    ".step": {
      paddingLeft: "10%",
      textAlign: "justify",
    },
  }
);

const DesignStep = styled(
  ({
    title,
    index,
    description,
    ...props
  }: {
    title: string;
    index: string;
    description?: string;
  }) => {
    return (
      <Flex {...props} direction="column">
        <Center px="s24" css={{ fontWeight: "bold" }}>
          <Box className="index">{index}</Box>
          <Box className="title">{title}</Box>
        </Center>
        {description && <Box className="description">{description}</Box>}
      </Flex>
    );
  },
  {
    textAlign: "center",
    height: "100%",

    ".index": {
      mx: "auto",
      display: "inline-block",
      fontSize: "$title",
      lineHeight: "30px",
      width: 100,
      borderBottom: "2px solid $textColor",
    },
    ".title": {
      marginTop: "$s4",
    },
    ".description": {
      height: "100%",
      marginTop: "$s24",
      border: "solid 2px $textColor",
      textAlign: "left",
      borderRadius: 5,
      px: "$s8",
      py: "$s8",
    },
  }
);

const DesignProcessFlow = styled(({ ...props }) => {
  return (
    <Box {...props}>
      <Subtitle>MY Design ?????????????????????:</Subtitle>
      <Grid column={{ "@xs": 1, "@sm": 2, "@xxl": 3 }} gap="s64">
        <DesignStep
          index="01"
          title="???????????????"
          description="?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
        />
        <DesignStep
          index="02"
          title="???????????????"
          description="?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"
        />
        <DesignStep
          index="03"
          title="??????"
          description="?????????????????????????????????????????????????????????????????????????????????????????????????????????"
        />
        <DesignStep
          index="04"
          title="??????"
          description="?????????MYDesign????????????????????????????????????????????????????????????"
        />

        <DesignStep
          index="05"
          title="?????????"
          description="???????????????????????????"
        />
        <DesignStep index="06" title="??????????????? ???????????????" />
      </Grid>
    </Box>
  );
});

const FlowWrapper = styled(Grid, {
  gridTemplateAreas: `
  "workFlow"  "requestFlow" "teamFlow" "designFlow"`,
  ".divider": { display: "none" },

  "@media(min-width: 1025px)": {
    gridTemplateAreas: `
  "workFlow teamFlow" "divider divider" "requestFlow designFlow"`,
    ".divider": { display: "flex" },
  },
});

export const About = () => {
  return (
    <Box py="s48" id="service">
      <Container center>
        <Center>
          <Box>
            <Title>MY Design ???????????????</Title>
          </Box>
        </Center>
        <Box my="s24">
          MY Design
          ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </Box>

        <Box>
          <Image
            src={imageAbout}
            width="100%"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="4000"
          />
        </Box>
      </Container>
      <Container mt="s24" pb="s48">
        <Flex jusity="start">
          <ConvarationWrapper>
            <Subtitle weight="bold" block>
              ??????????????????
            </Subtitle>
            <Paragraph align="justify">
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </Paragraph>
          </ConvarationWrapper>
        </Flex>
        <Flex jusity="end">
          <ConvarationWrapper align="right">
            <Subtitle weight="bold" block>
              ???????????????????????????????????????????????????
            </Subtitle>
            <Paragraph align="justify">
              ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????MY
              Design
              ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </Paragraph>
          </ConvarationWrapper>
        </Flex>
      </Container>
      <FlowWrapper>
        <FlowBox bgc="primary" css={{ gridArea: "workFlow" }}>
          <WorkFlow />
        </FlowBox>

        <FlowBox bgc="secodary" css={{ gridArea: "teamFlow" }}>
          <TeamFlow />
        </FlowBox>

        <Divider css={{ gridArea: "divider" }} className="divider" />

        <FlowBox bgc="primary" css={{ gridArea: "requestFlow" }}>
          <RequestFlow />
        </FlowBox>

        <FlowBox bgc="secodary" css={{ gridArea: "designFlow" }}>
          <DesignProcessFlow />
        </FlowBox>
      </FlowWrapper>
    </Box>
  );
};
