import ProjectCard from "./ProjectCard";
import { Text, Grid, Space } from "@mantine/core";
import { useState, useEffect } from "react";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    requestProjects();
  }, []);

  async function requestProjects() {
    const res = await fetch("projects.json");
    const json = await res.json();

    setProjects(json);
  }
  return (
    <div className="contentContainer">
      <Text
        id="my-projects"
        size="xl"
        color="white"
        align="center"
        weight={250}
        margin="20px"
      >
        MY PROJECTS
      </Text>
      <Space h="xl" />
      <Grid gutter="xl" justify="center">
        {!projects.length ? (
          <h1>No projects found</h1>
        ) : (
          projects.map((project) => {
            return (
              <Grid.Col sm={12} md={6} lg={4}>
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
              </Grid.Col>
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default ProjectsList;
