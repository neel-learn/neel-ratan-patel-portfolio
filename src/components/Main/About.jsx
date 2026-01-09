import myPhoto from '../objects/images/me.jpg';

const About = () => {
    return (
        <section id="about" className="secondSection screenpage">
            <div className="about-container">
                <div className="about-left-section">
                    <div id="about-img">
                        <img src={myPhoto} alt="owner image"/>
                    </div>
                    <div className="owner-info">
                        PortFolio Owner
                    </div>
                    <div id="about-name">
                        <h3>
                            <span className="hover-grow">N</span>
                            <span className="hover-grow">E</span>
                            <span className="hover-grow">E</span>
                            <span className="last-letter hover-grow">L</span>
                            <span className="hover-grow">R</span>
                            <span className="hover-grow">A</span>
                            <span className="hover-grow">T</span>
                            <span className="hover-grow">A</span>
                            <span className="last-letter hover-grow">N</span>
                            <span className="hover-grow">P</span>
                            <span className="hover-grow">A</span>
                            <span className="hover-grow">T</span>
                            <span className="hover-grow">E</span>
                            <span className="hover-grow">L</span>
                        </h3>
                    </div>
                    
                </div>
                <div className="about-right-section">
                    <h3>
                        <span className="hover-grow">A</span>
                        <span className="hover-grow">b</span>
                        <span className="hover-grow">o</span>
                        <span className="hover-grow">u</span>
                        <span className="hover-grow">t</span>
                        <span className="hover-grow">&nbsp;</span>
                        <span className="hover-grow">M</span>
                        <span className="hover-grow">e</span>
                    </h3>
                    <h4>
                        Hi, I am a Java Full Stack Developer with a strong foundation in Core & Advanced Java, Spring, Spring Boot, SQL, HTML, CSS, JavaScript, and Bootstrap. Quick learner with good problem-solving skills and a passion for coding and web development.Complete Ethical Hacking course from DROP Organization.
                    </h4>
                </div>
            </div>
        </section>
    );
};

export default About;