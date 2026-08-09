import { Link, useLocation } from "react-router";
import { useEffect } from "react";
import heroImg from "../assets/hero-img.jpg";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import NameTitle from "../components/NameTitle";
import arrowIcon from "../assets/icons/arrow-white-down.svg";
import chevronIcon from "../assets/icons/chevron.svg";

export default function HomePage({ scrolled }) {
  const skills = ["Figma", "VS Code", "React"];

  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [location.hash]);

  return (
    <div>
      <article id="hero" className={`hero ${scrolled ? "hero-scrolled" : ""}`}>
        <img src={heroImg} alt="" className="hero-img" />
        <div className="hero-text">
          <h1 className="hero-title">
            <NameTitle variant="hero" />
          </h1>

          <h3 className="hero-list">UX/UI designer & Frontend Developer</h3>

          <div className="hero-button-wrap">
            <Link
              to="/#projects"
              className="hero-button"
              aria-label="Explore my work"
            >
              <span className="hero-button-text">Explore my work</span>
              <img src={arrowIcon} alt="" className="hero-button-icon" />
            </Link>
          </div>
        </div>

        <div>
          <Link
            to="/#projects"
            className="hero-scroll-indicator"
            aria-label="Scroll to see projects"
          >
            <img src={chevronIcon} alt="" className="hero-scroll-indicator-icon" />
          </Link>
        </div>
      </article>

      <div className="page">
        <section id="projects">
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
          <h2>About me</h2>
          <p>...</p>
          <Link to="/about">Read more</Link>
        </section>

        <section id="toolkit">
          <h2>Toolkit</h2>
          {skills.map((skill) => (
            <p className="stack" key={skill}>
              {skill}
            </p>
          ))}
        </section>

        <section id="exploring">
          <h2>Currently learning/exploring</h2>
          <p>...</p>
        </section>

        <section id="contact">
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
            <a href="https://github.com/FKAYSR" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </h3>
        </section>
      </div>
    </div>
  );
}
