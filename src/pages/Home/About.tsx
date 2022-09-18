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
  marginBottom: "$s4",
  display: "inline-block",
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
  flexDirection: "column",
  height: "100%",
  py: "$s16",
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
  aspectRatio: "1/1",
  display: "inline-flex",
  alignItems: "center",
  width: "100%",
});
const FlowImageWrapper = styled(Box, {
  width: "100%",
  border: "5px solid $white",
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
          <FlowBox bgc="primary">
            <Flex gap="s48" jusity="end" align="center">
              <Box className="dot" />
              <Box className="dot" />
              <Box className="divider right" />
            </Flex>
          </FlowBox>
        </Col>
        <Col md={6} xs={12}>
          <FlowBox bgc="secodary">
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
    <Box px="s48">
      <Center css={{ height: 40 }}>
        <Title>客様の要望に応じて</Title>
        <Box>
          <Text
            block
            backgroundColor="secondary"
            px="s4"
            css={{
              fontSize: "$title",
            }}
          >
            デザインサービス
          </Text>
        </Box>
      </Center>
      <Square>
        <FlowImageWrapper>
          <Image src={workflowImage} width="100%" />
        </FlowImageWrapper>
      </Square>
      <Box px="s24">
        <Subtitle>MY Design を選ぶ理由:</Subtitle>
        <Box>
          <Flex>
            <Name>低価格:</Name>
            <Paragraph align="justify">
              高品質の製品を、スピーディーに、コストを抑えて納得の低価格でご提供しています。コストを50％まで削減できます。
            </Paragraph>
          </Flex>
          <Flex>
            <Name>高品質:</Name>
            <Paragraph align="justify">
              顧客に満足していただけるまでプロジェクトを終了せずに最後まで成し遂げます。
            </Paragraph>
          </Flex>
          <Flex>
            <Name>低価格:</Name>
            <Paragraph align="justify">
              24時間以内に製品を完成させることができます。
            </Paragraph>
          </Flex>
          <Flex>
            <Name>人材:</Name>
            <Paragraph align="justify">
              長年の専門的経験、ソフトウェアの熟練した使用を伴う人材...
            </Paragraph>
          </Flex>
          <Flex>
            <Name css={{ minWidth: 200 }}>日本語対応１００％:</Name>
            <Paragraph align="justify">
              言語の障壁を取り除き、当社が国際クライアントとの円滑なやり取りを行えます。
            </Paragraph>
          </Flex>
          <Name>秘密保持契約。</Name>
        </Box>
      </Box>
    </Box>
  );
};

const TeamFlow = () => {
  return (
    <Box px="s48">
      <Center css={{ height: 40 }}>
        <Title>人材サービス</Title>
      </Center>
      <Square>
        <FlowImageWrapper css={{ px: "10%" }}>
          <Image src={teamflowImage} width="100%" />
        </FlowImageWrapper>
      </Square>
      <Box>
        <Subtitle>MY Design の人材サービスが選ばれる理由:</Subtitle>
        <Box>
          <Grid column={{ "@md": 2, "@xs": 1 }} gapX="s32" gapY="s8">
            <Box>
              <Name>低価格:</Name>
              <Paragraph>
                低価格でプロフェッショナルデザイナーをご提供しています。コストを50％まで削減できます。
              </Paragraph>
            </Box>

            <Box>
              <Name>高品質:</Name>
              <Paragraph>
                MY Design
                のすべてのデザイナーは、3年以上の経験があり、AI、PSなどの使用に習熟しています。
              </Paragraph>
            </Box>
            <Box>
              <Name>日本語対応100％:</Name>
              <Paragraph>
                日本企業での長年の経験を持つ担当者により、MY Design
                で実施される全てのプロジェクトは日本語で交渉されています。
              </Paragraph>
            </Box>
            <Box>
              <Name>情報セキュリティー:</Name>
              <Paragraph>
                顧客情報セキュリティーポリシーを厳守します。
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
        <Subtitle>ご依頼の流れ:</Subtitle>
        <Grid className="request-flow" align="center">
          <Box css={{ gridArea: "step" }}>
            <Image src={requestImage} width="100%" />
          </Box>
          <Paragraph css={{ gridArea: "step1" }} className="step">
            まずはお問い合わせください。お電話とメールからのお問い合わせを承っております。
          </Paragraph>
          <Paragraph css={{ gridArea: "step2" }} className="step">
            意図の確認・デザインの方向性・資料/素材提供の有無など実際に制作するにあたって必要な項目をヒアリングさせていただきます。ご予算、納期、工程などを考慮してお見積り致します。
          </Paragraph>
          <Paragraph css={{ gridArea: "step3" }} className="step">
            お見積りやお打ち合わせの内容にご了承いただきご依頼いただけましたら、実際の制作に着手しさせていただきます。
          </Paragraph>
          <Paragraph css={{ gridArea: "step4" }} className="step">
            デザインの内容にご了承いただけましたら、詳細をお客様にチェックしていただきます。微調整に関しては、納品前で常識の範囲内であれば何度でも修正可能です。納得いくまで一緒に作ります。
          </Paragraph>
          <Paragraph css={{ gridArea: "step5" }} className="step">
            確認作業・修正が終わりましたら、納品します。
          </Paragraph>
        </Grid>
      </Box>
    );
  },
  {
    px: "$s72",
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

const DesignProcessFlow = styled(
  ({ ...props }) => {
    return (
      <Box {...props}>
        <Subtitle>MY Design と協力プロセス:</Subtitle>
        <Grid column={{ "@xs": 1, "@sm": 2, "@lg": 3 }} gap="s64">
          <DesignStep
            index="01"
            title="問い合わせ"
            description="まずはお問い合わせください。お電話とメールからのお問い合わせを承っております。"
          />
          <DesignStep
            index="02"
            title="ヒアリング"
            description="貴社のご要望と目標を正確に理解するためにヒアリングを行い、人材をご用意します。"
          />
          <DesignStep
            index="03"
            title="提案"
            description="御社のご要望に応じて適切なスキルを持った優秀なデザイナをご提案します。"
          />
          <DesignStep
            index="04"
            title="選択"
            description="御社はMYDesignの提案に基づいてデザイナーを選択します。"
          />

          <DesignStep
            index="05"
            title="ご契約"
            description="契約を締結します。"
          />
          <DesignStep index="06" title="デザイナき スタート。" />
        </Grid>
      </Box>
    );
  },
  {
    mx: "$s72",
  }
);

export const About = () => {
  return (
    <Box py="s48">
      <Container center>
        <Center>
          <Box>
            <Title>MY Design のサービス</Title>
          </Box>
        </Center>
        <Box my="s24">
          MY Design
          で「人材サービス」と「客様の要望に応じてデザインサービス」の２つのサービス形態をご提供しております。
        </Box>

        <Box>
          <Image src={imageAbout} width="100%" />
        </Box>
      </Container>
      <Container mt="s24" pb="s48">
        <Flex jusity="start">
          <ConvarationWrapper>
            <Subtitle weight="bold" block>
              人材サービス
            </Subtitle>
            <Paragraph align="justify">
              人材サービスは、貴社の希望と目標に応じてスキルを持つデザイナーを組み、貴社のリソースとしてご提供するという形式です。チームはその期間中すべての時間と力を貴社のプロジェクトのために集中することになります。
            </Paragraph>
          </ConvarationWrapper>
        </Flex>
        <Flex jusity="end">
          <ConvarationWrapper align="right">
            <Subtitle weight="bold" block>
              客様の要望に応じてデザインサービス
            </Subtitle>
            <Paragraph align="justify">
              お客様の製品についての要件がすでに定義できている場合は、お問い合わせください。MY
              Design
              は合意された時間と予算内で、お客様の要件を満たした成果物を納品いたします。
            </Paragraph>
          </ConvarationWrapper>
        </Flex>
      </Container>
      <Flex wrap="wrap">
        <Col md={6} xs={12}>
          <FlowBox bgc="primary">
            <WorkFlow />
          </FlowBox>
        </Col>
        <Col md={6} xs={12}>
          <FlowBox bgc="secodary">
            <TeamFlow />
          </FlowBox>
        </Col>
      </Flex>
      <Divider />
      <Flex wrap="wrap">
        <Col md={6} xs={12}>
          <FlowBox bgc="primary">
            <RequestFlow />
          </FlowBox>
        </Col>
        <Col md={6} xs={12}>
          <FlowBox bgc="secodary">
            <DesignProcessFlow />
          </FlowBox>
        </Col>
      </Flex>
    </Box>
  );
};
