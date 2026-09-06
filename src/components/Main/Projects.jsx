import { useSelector } from "react-redux";
import './../css/Project.css';

const Projects = () => {

    const projectList = useSelector(
        (state) => state.portfolio.projectList
    );

    const sectionTitle = "Projects";

    return (
        <section
            id="projects"
            className="fifthSection screenpage"
        >

            {/* =====================================================
                PROJECT HEADING
            ===================================================== */}

            <div className="projects-heading qualifications-heading">

                <h3>
                    {sectionTitle.split("").map((letter, index) => (
                        <span
                            key={index}
                            className="hover-grow"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </h3>

            </div>


            {/* =====================================================
                PROJECT LIST
            ===================================================== */}

            <div className="project-section">

                {projectList.map((project, index) => (

                    <article
                        className={`project-container ${
                            project.featured ? "featured-project" : ""
                        }`}
                        key={index}
                    >

                        {/* PROJECT NUMBER */}
                        <span className="project-number">
                            {String(index + 1).padStart(2, "0")}
                        </span>


                        {/* PROJECT CONTENT */}
                        <div className="project-content">

                            {/* TITLE */}
                            <h4>
                                {project.title}
                            </h4>


                            {/* DESCRIPTION */}
                            <h5 className="project-description">
                                {project.description}
                            </h5>


                            {/* ROLE */}
                            <h5 className="role">

                                <span className="role-bold">
                                    Role:
                                </span>

                                {" "}

                                {project.role}

                            </h5>


                            {/* TECHNOLOGIES */}
                            {project.technologies?.length > 0 && (

                                <div className="project-technologies">

                                    {project.technologies.map(
                                        (tech, techIndex) => (

                                            <span
                                                key={techIndex}
                                                className="technology-tag"
                                            >
                                                {tech}
                                            </span>

                                        )
                                    )}

                                </div>

                            )}


                            {/* =================================================
                                PROJECT ACTIONS
                            ================================================= */}

                            {(project.github || project.deploy) && (

                                <div className="project-actions">

                                    {project.github && (

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action github-action"
                                        >
                                            <span>
                                                GitHub
                                            </span>

                                            <span className="action-arrow">
                                                ↗
                                            </span>
                                        </a>

                                    )}


                                    {project.deploy && (

                                        <a
                                            href={project.deploy}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-action deploy-action"
                                        >
                                            <span>
                                                Live Demo
                                            </span>

                                            <span className="action-arrow">
                                                ↗
                                            </span>
                                        </a>

                                    )}

                                </div>

                            )}

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
};

export default Projects;