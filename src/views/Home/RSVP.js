import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { Fragment, useState } from "react";
import { Fade } from "react-reveal";
import styled, { useTheme, css } from "styled-components";
import { layout } from "styled-system";
import { typography } from "styled-system";
import { space } from "styled-system";
import Button from "../../components/Button";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Row from "../../components/Row";
import Segment from "../../components/Segment";
import { ADD_WEDDING_MUTATION } from "../../gql/MutationTodo";
import { WEDDING_QUERY } from "../../gql/QueryTodo";
import { Section } from "./styles";

const TextInfo = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black};
  ${space};
`;
const TextTitle = styled.h1`
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black};
  background: linear-gradient(
    45deg,
    ${(p) => p.theme.colors.secondary} 0%,
    ${(p) => p.theme.colors.primary} 50%,
    ${(p) => p.theme.colors[p.color] || p.theme.colors.black} 50%
  );
  margin-bottom: 16px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 210% 100%;
  background-position: 100%;
  transition: background-position 500ms ease;
  text-decoration: none;
  display: inline-block;
  ${layout};
  ${typography};
  ${space};
  em {
    color: ${(p) => p.theme.colors.primary};
  }

  &:hover {
    color: ${(p) => p.theme.colors.primary};
    ${(p) =>
      p.canHover &&
      css`
        background-position: 0 100%;
      `}
  }
`;
const TextCaption = styled.p`
  margin-top: 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.colors.black70};
  ${layout}
  ${space}
  ${typography}
`;

const Card = styled(Segment)``;
const RSVP = ({ guest }) => {
  const theme = useTheme();

  const [name, setName] = useState(guest || "");
  const [message, setMessage] = useState("");
  const [attend, setAttend] = useState(false);
  const { data: { wedding: { data = [] } = {} } = {} } = useQuery(
    WEDDING_QUERY,
    {
      variables: { size: 200 },
      onError(error) {
        console.log(error);
      },
    }
  );

  const [addTodo, { submitLoading }] = useMutation(ADD_WEDDING_MUTATION, {
    onError: (error) => {
      alert(error);
    },
    update: (cache, { data: { createWedding } }) => {
      try {
        let { wedding } = cache.readQuery({
          query: WEDDING_QUERY,
          variables: { size: 200 },
        });
        const data = [...wedding.data, createWedding];
        cache.writeQuery({
          variables: { size: 200 },
          query: WEDDING_QUERY,
          data: { wedding: { ...wedding, data } },
        });
        setName("");
        setMessage("");
        setAttend(false);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      message,
      attend,
      created: Math.floor(new Date()).toString(),
    };
    addTodo({ variables: { data: body } });
  };

  const animation = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "rgba(255, 255, 255,0)",
        display: "block",
        zIndex: 0,
        position: "relative",
        shapeRendering: "auto",
      }}
      width="1980"
      height="300"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 1980 300"
    >
      <g transform="">
        <linearGradient id="lg-0.8589700868456098" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor={theme.colors.secondary} offset="0"></stop>
          <stop stopColor={theme.colors.secondary} offset="0"></stop>
          <stop stopColor={theme.colors.secondary} offset="1"></stop>
        </linearGradient>
        <path
          d="M 0 0 L 0 241.915 Q 165 249.725 330 215.673 T 660 208.18 T 990 199.055 T 1320 208.65 T 1650 230.303 T 1980 211.464 L 1980 0 Z"
          fill={theme.colors.primary}
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="14.285714285714285s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="0s"
            values="M0 0L 0 243.84212793573954Q 165 244.198481323735  330 214.97043919697492T 660 203.02580743298734T 990 199.82321083516976T 1320 201.96793159645011T 1650 230.24393184683908T 1980 207.67099842439933L 1980 0 Z;M0 0L 0 235.0618328876254Q 165 269.3721943745703  330 218.17211425063454T 660 226.50305342938853T 990 196.3260923575501T 1320 232.4077939064989T 1650 230.51147502836807T 1980 224.94661631212443L 1980 0 Z;M0 0L 0 205.27226479494266Q 165 240.5155728470433  330 212.79915181526675T 660 213.58512293669696T 990 212.32102514981105T 1320 204.89820182351832T 1650 246.2686309045961T 1980 215.49084241837852L 1980 0 Z;M0 0L 0 243.84212793573954Q 165 244.198481323735  330 214.97043919697492T 660 203.02580743298734T 990 199.82321083516976T 1320 201.96793159645011T 1650 230.24393184683908T 1980 207.67099842439933L 1980 0 Z"
          ></animate>
        </path>
        <path
          d="M 0 0 L 0 227.032 Q 165 262.125 330 238.153 T 660 207.735 T 990 220.548 T 1320 228.142 T 1650 211.542 T 1980 236.441 L 1980 0 Z"
          fill={theme.colors.primary}
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="14.285714285714285s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-2.8571428571428568s"
            values="M0 0L 0 198.91548309391138Q 165 261.3922476818655  330 234.30112068896972T 660 204.3221098374849T 990 197.40719560146192T 1320 210.24404882431836T 1650 221.90110529290098T 1980 229.98865514501918L 1980 0 Z;M0 0L 0 233.19830897370343Q 165 262.28508633762743  330 238.99758623407547T 660 208.4840242477092T 990 225.62292636527536T 1320 232.06758779859936T 1650 209.26990298551567T 1980 237.85581571111973L 1980 0 Z;M0 0L 0 214.6550175761586Q 165 255.77933395353938  330 205.58046331850787T 660 248.3458831575966T 990 222.1831187074748T 1320 230.19035948492177T 1650 228.0683781289646T 1980 201.17251667905413L 1980 0 Z;M0 0L 0 198.91548309391138Q 165 261.3922476818655  330 234.30112068896972T 660 204.3221098374849T 990 197.40719560146192T 1320 210.24404882431836T 1650 221.90110529290098T 1980 229.98865514501918L 1980 0 Z"
          ></animate>
        </path>
        <path
          d="M 0 0 L 0 237.421 Q 165 234.24 330 206.641 T 660 208.817 T 990 212.796 T 1320 203.256 T 1650 207.638 T 1980 231.557 L 1980 0 Z"
          fill={theme.colors.secondary}
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="14.285714285714285s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-5.7142857142857135s"
            values="M0 0L 0 215.16905431144298Q 165 249.14013005538385  330 208.41012606073144T 660 219.40030814888186T 990 211.27085687418423T 1320 192.61204273811109T 1650 197.1885193400654T 1980 194.1286625359876L 1980 0 Z;M0 0L 0 229.8226321403231Q 165 236.19867929760932  330 203.52409441404166T 660 214.7170706299125T 990 198.3572922664371T 1320 205.71937345561807T 1650 212.78814530052776T 1980 239.82308226121222L 1980 0 Z;M0 0L 0 247.9361109368723Q 165 231.5303336771614  330 210.95445598569952T 660 200.65096582892625T 990 232.7786653161789T 1320 199.8474501390285T 1650 200.50986927760832T 1980 220.1168133404018L 1980 0 Z;M0 0L 0 215.16905431144298Q 165 249.14013005538385  330 208.41012606073144T 660 219.40030814888186T 990 211.27085687418423T 1320 192.61204273811109T 1650 197.1885193400654T 1980 194.1286625359876L 1980 0 Z"
          ></animate>
        </path>
        <path
          d="M 0 0 L 0 236.55 Q 165 256.696 330 217.771 T 660 229.085 T 990 199.848 T 1320 234.073 T 1650 227.095 T 1980 237.087 L 1980 0 Z"
          fill="url(#lg-0.8589700868456098)"
          opacity="0.4"
        >
          <animate
            attributeName="d"
            dur="14.285714285714285s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-8.571428571428571s"
            values="M0 0L 0 224.7037505439761Q 165 272.6930353316019  330 229.55156582258994T 660 236.61065365348014T 990 219.91504503660167T 1320 230.31466475967437T 1650 220.06173038098666T 1980 207.42481352241373L 1980 0 Z;M0 0L 0 208.16910156011605Q 165 259.1249630688156  330 226.47382965111322T 660 228.26470562084018T 990 214.50370306252307T 1320 233.37870660752753T 1650 248.78240193288315T 1980 229.8215346622372L 1980 0 Z;M0 0L 0 236.77128821460013Q 165 256.3974835288876  330 217.5513635828135T 660 228.94425335689596T 990 199.4737517303316T 1320 234.14322206572314T 1650 227.22631676701283T 1980 237.64106680051827L 1980 0 Z;M0 0L 0 224.7037505439761Q 165 272.6930353316019  330 229.55156582258994T 660 236.61065365348014T 990 219.91504503660167T 1320 230.31466475967437T 1650 220.06173038098666T 1980 207.42481352241373L 1980 0 Z"
          ></animate>
        </path>
        <path
          d="M 0 0 L 0 208.515 Q 165 252.623 330 209.4 T 660 212.907 T 990 214.014 T 1320 210.712 T 1650 206.499 T 1980 232.652 L 1980 0 Z"
          fill={theme.colors.secondary}
          opacity="1"
        >
          <animate
            attributeName="d"
            dur="14.285714285714285s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-11.428571428571427s"
            values="M0 0L 0 206.7391959060845Q 165 245.70594371304395  330 203.10592615464478T 660 200.39674383834097T 990 223.5013485428745T 1320 197.11555530025123T 1650 192.20908422829876T 1980 225.460814725169L 1980 0 Z;M0 0L 0 222.47847594882043Q 165 226.43274857890046  330 203.86035526418627T 660 198.8500946506723T 990 246.60167473644773T 1320 194.98517556687025T 1650 247.29227858709245T 1980 200.39555084376045L 1980 0 Z;M0 0L 0 211.39873916492658Q 165 263.85646813786497  330 219.62354308390505T 660 233.22692097790812T 990 198.60435835485188T 1320 232.7961046393257T 1650 229.7087015967473T 1980 244.3330217931673L 1980 0 Z;M0 0L 0 206.7391959060845Q 165 245.70594371304395  330 203.10592615464478T 660 200.39674383834097T 990 223.5013485428745T 1320 197.11555530025123T 1650 192.20908422829876T 1980 225.460814725169L 1980 0 Z"
          ></animate>
        </path>
      </g>
    </svg>
  );

  const colProps = data?.length > 0 ? { lg: 5, wide: 5 } : { lg: 12, wide: 12 };

  return (
    <Section id="greetings" zIndex={9}>
      <Segment
        position="absolute"
        top="-20%"
        left="0"
        width="100%"
        height="30%"
        className="is-desktop"
      >
        {animation()}
      </Segment>

      <Segment
        position="absolute"
        top="-16%"
        left="0"
        width="100%"
        height="30%"
        className="is-mobile"
      >
        {animation()}
      </Segment>

      <Container noGutter>
        <Row alignItems="center" justifyContent="center" mb={24}>
          <Col md={12} lg={12} wide={12}>
            <Segment className="is-desktop" textAlign="center">
              <TextTitle canHover mb={0}>
                <em>Wishes</em> &
              </TextTitle>
              <br />
              <TextTitle canHover>
                <em>Greetings</em>
              </TextTitle>
              <TextCaption fontSize={16}>Leave your message here</TextCaption>
            </Segment>
            <Segment className="is-mobile" textAlign="center">
              <TextTitle canHover color="black" fontSize={40} lineHeight="50px">
                <em>Wishes</em> & <em>Greetings</em>
              </TextTitle>
              <TextCaption fontSize={16}>Leave your message here</TextCaption>
            </Segment>
          </Col>
        </Row>
        <Row alignItems="flex-start" justifyContent="center">
          <Col md={12} {...colProps}>
            <Card
              px={16}
              maxWidth={400}
              alignItems="center"
              justifyContent="center"
              display="flex"
              m="0 auto"
              mb={24}
            >
              <Form onSubmit={handleSubmit}>
                <Fade up>
                  <Segment mb={20}>
                    <TextInfo mb={8}>Name</TextInfo>
                    <input
                      value={name}
                      name="name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      required={true}
                      placeholder="your name"
                    />
                  </Segment>
                </Fade>
                <Fade up delay={50}>
                  <Segment mb={20}>
                    <TextInfo mb={8}>Message</TextInfo>
                    <textarea
                      value={message}
                      name="message"
                      type="textarea"
                      onChange={(e) => setMessage(e.target.value)}
                      required={true}
                      placeholder="your message"
                      rows={4}
                    />
                  </Segment>
                </Fade>
                <Fade up delay={100}>
                  <Segment mb={20}>
                    <TextInfo mb={8}>
                      Will you come to our wedding celebration?
                    </TextInfo>
                    <label className="radio">
                      Yes
                      <input
                        type="radio"
                        name="radio"
                        checked={attend === true}
                        onChange={() => setAttend(true)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="radio">
                      No
                      <input
                        type="radio"
                        name="radio"
                        checked={attend === false}
                        onChange={() => setAttend(false)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </Segment>
                </Fade>
                <Fade bottom>
                  <Button type="submit" disable={submitLoading}>
                    {submitLoading ? "Sending..." : "Send Message"}
                  </Button>
                </Fade>
              </Form>
            </Card>
          </Col>
          {data?.length > 0 && (
            <Col md={12} lg={5} wide={5}>
              <Card
                px={16}
                maxHeight="400px"
                width="calc(100% - 32px)"
                overflow="auto"
              >
                {data.map((item, i) => (
                  <Fragment key={i}>
                    <Segment
                      py={8}
                      borderRadius="5px 0px 0px 5px"
                      px={12}
                      bg="white"
                      mb={12}
                      borderLeft={`5px solid ${theme.colors.primary}`}
                    >
                      <TextInfo mb={0}>{item.name}</TextInfo>
                      <TextCaption fontSize={14}>{item.message}</TextCaption>
                    </Segment>
                  </Fragment>
                ))}
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </Section>
  );
};

export default RSVP;
