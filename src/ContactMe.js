import { Stack, Text } from "@mantine/core";
import GradientText from "./GradientText";
import SocialLinks from "./SocialLinks";

const ContactMe = () => {
  return (
    <div className="contentContainer" id="contact">
      <Stack spacing="xl">
        {/* <GradientText
          text="Or You can contact me via email: kuba.wolodzko@gmail.com"
          thickness={250}
        /> */}
        <Text size="xl" color="white" align="center" weight={250}>
          MY SOCIAL MEDIA LINKS
        </Text>
        <SocialLinks />
        <Text size="xl" color="white" align="center" weight={250}>
          OR You can contact me via email:{" "}
          <a href="mailto:kuba.wolodzko@gmail.com">kuba.wolodzko@gmail.com</a>
        </Text>
      </Stack>
    </div>
  );
};

export default ContactMe;
