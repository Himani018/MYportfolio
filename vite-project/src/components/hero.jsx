function Hero() {
    return (
        <section id="home" className="hero-section" aria-label="Introduction">
            <div className="hero-copy">
                <p className="hero-role">Hey there, I'm a BCA student and aspiring software developer</p>
                <h1 className="hero-intro">Code is my language.<br />Creativity is my<br />signature. Now, what are<br />we building?</h1>
                <div className="hero-actions" aria-label="Portfolio links">
                    <a className="hero-link" href="https://github.com/Himani018?tab=repositories" target="_blank" rel="noreferrer">View projects</a>
                    <a className="hero-link" href="#about">About me</a>
                    <a className="hero-link" href="https://github.com/Himani018" target="_blank" rel="noreferrer">Send a brief hello</a>
                    <a className="hero-link hero-link--outline" href="https://github.com/Himani018" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="hero-link hero-link--outline" href="https://github.com/Himani018" target="_blank" rel="noreferrer">Let's talk</a>
                </div>
            </div>
        </section>
    )
}
export default Hero;
