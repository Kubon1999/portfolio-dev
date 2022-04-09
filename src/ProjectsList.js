import ProjectCard from "./ProjectCard";
import { Text, SimpleGrid } from "@mantine/core";
import { useState, useEffect } from "react";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    requestProjects();
  }, []);

  async function requestProjects() {
    const res = await fetch("generated.json");
    const json = await res.json();

    setProjects(json);
  }
  return (
    <>
      <Text
        id="my-projects"
        size="xl"
        color="white"
        align="center"
        weight={250}
        className="contentContainer"
      >
        MY PROJECTS
      </Text>
      <SimpleGrid cols={3} spacing="xs">
        {!projects.length ? (
          <h1>No projects found</h1>
        ) : (
          projects.map((project) => {
            return (
              <ProjectCard
                key={project.linkToProject}
                imageSrcPath={project.imageSrcPath}
                altTextImg={project.altTextImg}
                title={project.title}
                description={project.description}
                badgeText={project.badgeText}
                badgeColor={project.badgeColor}
                linkToProject={project.linkToProject}
                linkToProjectText={project.linkToProjectText}
              />
            );
          })
        )}
      </SimpleGrid>
    </>
  );
};

export default ProjectsList;
