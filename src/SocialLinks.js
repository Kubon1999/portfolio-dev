import { Grid, Center } from "@mantine/core";
import {
  BrandInstagram,
  BrandGithub,
  BrandTiktok,
  BrandYoutube,
} from "tabler-icons-react";
import SocialButton from "./SocialButton";

const SocialLinks = () => {
  return (
    <Center>
      <Grid grow justify="center">
        <Grid.Col span={2}>
          <SocialButton
            text="YouTube"
            logo={<BrandYoutube />}
            bgColor="#ff0000"
            linkTo="https://www.youtube.com/channel/UCoSN5_vypjiJ8leuabiWLyg"
          />
        </Grid.Col>
        {/* <Grid.Col span={2}>
          <SocialButton
            text="Instagram"
            logo={<BrandInstagram />}
            bgColor="#4262ff"
            linkTo="https://www.instagram.com/hansu_dev/"
          />
        </Grid.Col> */}
        <Grid.Col span={2}>
          <SocialButton
            text="GitHub"
            logo={<BrandGithub />}
            bgColor="#212529"
            linkTo="https://github.com/Kubon1999"
          />
        </Grid.Col>
        {/* <Grid.Col span={2}>
          <SocialButton
            text="TikTok"
            logo={<BrandTiktok />}
            bgColor="#fe2c55"
            linkTo="https://www.tiktok.com/@hansu_official"
          />
        </Grid.Col> */}
      </Grid>
    </Center>
  );
};

export default SocialLinks;
