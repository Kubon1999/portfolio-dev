import { Text, Title, Center } from "@mantine/core";

const HeroFront = () => {
  const frontText = `Junior Front-End Engineer`;
  const frontText2 = `Always optimistic and hassle-free computer science student that likes to work in international environment.`;
  const frontText3 = `When I encounter a problem I always try to look for a solution rather than a culprit.`;

  return (
    <Text
      className="splineHeroHeaderText"
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: "white", to: "black", deg: 90 }}
      size="xl"
      weight={250}
    >
      <Center>
        {frontText} <br></br>
        <br></br>
        {frontText2}
      </Center>
    </Text>
  );
};

export default HeroFront;
