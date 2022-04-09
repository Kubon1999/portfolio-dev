import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

const ProjectCard = (props) => {
  const {
    imageSrcPath,
    altTextImg,
    title,
    description,
    badgeText,
    badgeColor,
    linkToProject,
    linkToProjectText,
  } = props;

  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={imageSrcPath} height={160} alt={altTextImg} />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={550}>{title}</Text>
          <Badge color={badgeColor} variant="light">
            {badgeText}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {description}
        </Text>

        <Button
          variant="light"
          color="green"
          fullWidth
          style={{ marginTop: 14 }}
        >
          <a color="white" href={linkToProject} className="aStyle">
            {linkToProjectText}
          </a>
        </Button>
      </Card>
    </div>
  );
};

export default ProjectCard;
