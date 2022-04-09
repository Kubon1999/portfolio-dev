import { Button } from "@mantine/core";

const SocialButton = (props) => {
  const { text, logo, bgColor, linkTo } = props;
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={linkTo}
      leftIcon={logo}
      styles={(theme) => ({
        root: {
          backgroundColor: bgColor,
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,

          "&:hover": {
            backgroundColor: theme.fn.darken("#212529", 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      {text}
    </Button>
  );
};

export default SocialButton;
