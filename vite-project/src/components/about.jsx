function About() {
  return (
    <section id="about" className="about-section" aria-label="About me">
      <h2 className="SubHeading">About</h2>
      <div className="about-grid">
        <div className="about-copy">
          <h1 className="mainFont">
            A curious <span>BCA student</span> turning ideas into products.
          </h1>
          <p className="mainP">
            I'm a BCA student and full-stack developer who likes building things end to end,
            <br />
            from the interface people see to the APIs and databases behind it.
            <br />
            I enjoy solving problems on LeetCode and turning what I learn into real projects.
          </p>
        </div>

        <div className="highlights">
          <div className="highlight">
            <span className="dot"></span>
            <div>
              <b>Full-stack development</b>
              <span>MERN stack, REST APIs, and responsive interfaces</span>
            </div>
          </div>
          <div className="highlight">
            <span className="dot"></span>
            <div>
              <b>Problem solving</b>
              <span>100+ LeetCode problems solved</span>
            </div>
          </div>
          <div className="highlight">
            <span className="dot"></span>
            <div>
              <b>Design sense</b>
              <span>Creative, polished UI that still stays fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
