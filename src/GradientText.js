import { Text, Center } from "@mantine/core";

const GradientText = (props) => {
  const { text, thickness } = props;

  return (
    <Text
      className="splineHeroHeaderText"
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: "white", to: "black", deg: 90 }}
      size="xl"
      weight={thickness}
    >
      {text}
    </Text>
  );
};

export default GradientText;
