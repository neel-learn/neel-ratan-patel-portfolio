import { useSelector } from "react-redux";

const Projects = () => {
    
    const projectList = useSelector((state) => state.portfolio.projectList);

    const sectionTitle = "Projects";

    return (
        <section id="projects" className="fifthSection screenpage">
            {/* Optimized Heading using .split() and .map() */}
            <div className="projects-heading qualifications-heading">
                <h3>
                    {sectionTitle.split("").map((letter, index) => (
                        <span key={index} className="hover-grow">{letter}</span>
                    ))}
                </h3>
            </div>

            {/* 2. One main div that "paints" every object */}
            <div className="project-section">
                {projectList.map((project, index) => (
                    <div className="project-container" key={index}>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h4>{project.title}</h4>
                            <h5>{project.description}</h5>
                            <h5 className="role">
                                <span className="role-bold">Role:</span> {project.role}
                            </h5>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;