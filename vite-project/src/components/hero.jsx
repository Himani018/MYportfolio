import { FaDownload, FaFolderOpen, FaGithub } from "react-icons/fa";
function Hero() {
    return (
        <>
            <h1 className="heroText">Hi, i'am <span className="name"> Himani Bahuguna.</span></h1>
            <h2 className="heroText">Code is my language. </h2>
            <h3 className="heroText">Creativity is my <span className="name">signature.</span></h3>
            <p>BCA student ·<span id="Dynamic">Aspiring Software Developer .</span> </p>
            <p>   I turn curious ideas into fast, elegant
                 web apps — Building modern web 
                 experiences with a focus on performance, 
                 scalability, and clean architecture.</p>
            <button id="ProjectButton"> <FaFolderOpen /> View Project</button> <span> <button id="ResumeButton"> <FaDownload /> Download Resume</button> </span>
            <button id="git"><FaGithub /> Github</button>
        </>
    )
}
export default Hero;