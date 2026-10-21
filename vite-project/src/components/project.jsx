import { useEffect, useRef } from "react";
import "../css/project.css";

const projects = [
  {
    type: "Web app · Full-stack",
    name: "GrabPic",
    description: "An event photo app where guests find their own pictures by taking a selfie and running face search across the event gallery.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    type: "Management system",
    name: "Asset Management System",
    description: "A system for tracking an organization's assets, from registration and assignment through to status and history.",
    stack: ["Add your stack"],
  },
  {
    type: "Portfolio · Front-end",
    name: "MYportfolio",
    description: "A personal portfolio showcasing my projects, skills, and work as a developer.",
    stack: ["React", "Vite", "CSS"],
  },
  ...[1, 2, 3].map((number) => ({
    type: "Coming soon",
    name: `Future Project ${number}`,
    description: "Project details will be added here soon.",
    stack: ["In progress"],
  })),
];

function Project() {
  const sectionRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trail = trailRef.current;
    if (!section || !trail) return;

    const length = trail.getTotalLength();
    trail.style.strokeDasharray = length;
    trail.style.strokeDashoffset = length;

    let frame = 0;
    const updateTrail = () => {
      frame = 0;
      const { top, height } = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, ((window.innerHeight * 1.5 - top) / (height + window.innerHeight * 1.5)) * 1.35));
      trail.style.strokeDashoffset = length * (1 - progress);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateTrail);
    };

    updateTrail();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="projects" className="project-section" aria-label="Projects" ref={sectionRef}>
      <svg className="project-trail" viewBox="0 0 1000 1800" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="project-trail-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <path
          ref={trailRef}
          d="M 780 0 C 930 80 930 210 780 270 C 630 330 630 160 780 160 C 910 160 910 350 760 410 C 610 470 390 410 240 470 C 90 530 90 730 240 790 C 390 850 390 650 240 650 C 90 650 90 870 250 930 C 410 990 610 930 760 990 C 910 1050 910 1250 760 1310 C 610 1370 610 1170 760 1170 C 900 1170 900 1380 750 1440 C 600 1500 400 1440 240 1500 C 90 1560 90 1740 250 1800"
        />
      </svg>
      <h1 className="SubHeading">Projects</h1>
      <div className="project-cards">
        {projects.map(({ type, name, description, stack }) => (
          <article className="project-card" key={name}>
            <p className="project-type">{type}</p>
            <h2>{name}</h2>
            <p className="project-description">{description}</p>
            <div className="project-stack">
              {stack.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="project-links">
              <span>Live demo</span>
              <span>Source code</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
