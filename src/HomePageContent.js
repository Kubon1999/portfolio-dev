import ContactMe from "./ContactMe";
import Hero from "./Hero";
import { Stack, Text } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import Resources from "./Resources";
import ProjectsList from "./ProjectsList";

const HomePageContent = () => {
  return (
    <div>
      <Stack>
        <Hero />
        <ProjectsList />
        <ContactMe />
        <Resources />
        <Text
          id="my-projects"
          size="xl"
          color="#6d6d6d"
          align="center"
          weight={250}
          className="contentContainer"
        >
          This site(MVP) is still under construction. Improvements will be done
          in the future.
        </Text>
      </Stack>
    </div>
  );
};

export default HomePageContent;
