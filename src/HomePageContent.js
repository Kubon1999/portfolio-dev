import ContactMe from "./ContactMe";
import Hero from "./Hero";
import { Stack, Text, Divider } from "@mantine/core";
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
        <Resources
          id="react-questions"
          text={"Get my notes with 85 questions & answers about React for FREE"}
          resource_id={"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"}
        ></Resources>
        <Resources
          id="server-setup"
          text={"Get Server Setup & Connection Cheatsheet for FREE"}
          resource_id={"9b1deb4d-347d-4bad-9b4d-2b0d7b3dcb6d"}
        ></Resources>

        <Text
          id="my-projects"
          size="xl"
          color="#6d6d6d"
          align="center"
          weight={250}
          className="contentContainer footerContent"
        >
          <Divider my="sm" />
          Kuba Wolodzko 2022
        </Text>
      </Stack>
    </div>
  );
};

export default HomePageContent;
