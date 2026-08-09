import { Link } from "react-router";
import heroImg from "../assets/hero-img.jpg";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  const skills = ["Figma", "VS Code", "React"];

  return (
    <div>
      <article className="hero">
        <img src={heroImg} alt="" className="hero-img" />
        <div className="hero-text">
          <h1>Freja Kejser</h1>
          <ul className="hero-list">
            <li>Exploring ideas</li>
            <li>Designing experiences</li>
            <li>Building interactions</li>
          </ul>
        </div>
      </article>

      <div className="page">
        <section>
          <h2>Explore my work</h2>
          <div>
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </section>

        <section>
          <h2>Currently working on</h2>
          <p>...</p>
        </section>

        <section>
          <h2>How I work</h2>
          <p>
            Research - Ideation - Wireframing - Prototyping - Testing -
            Development
          </p>
        </section>

        <section>
          <h2>Programs</h2>
          {skills.map((skill) => (
            <p key={skill} className="stack">
              {skill}
            </p>
          ))}
        </section>

        <section>
          <h2>About me</h2>
          <p>...</p>
          <Link to="/about">Read more</Link>
        </section>

        <section>
          <h2>Contact</h2>
          <h3>Email: kejserfreja@gmail.com</h3>
          <h3>
            <a
              href="https://www.linkedin.com/in/freja-kejser-00605b383"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </h3>
          <h3>
            <a
              href="https://github.com/FKAYSR"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </h3>
        </section>
      </div>
    </div>
  );
}
