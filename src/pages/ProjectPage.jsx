import { useParams } from "react-router";
import projects from "../data/projects";

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  return (
    <div>
      <h1>Projekt detail page</h1>
      {project ? <p>{project.title}</p> : <p>The project doesn't exist...</p>}
    </div>
  );
}
