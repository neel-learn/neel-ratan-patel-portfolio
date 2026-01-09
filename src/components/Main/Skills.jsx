import { useSelector } from "react-redux";

const Skills = () => {

  const languagesList = useSelector((state) => state.portfolio.languageList);
  const frontendList = useSelector((state) => state.portfolio.frontendList);
  const backendList = useSelector((state) => state.portfolio.backendList);
  const databaseList = useSelector((state) => state.portfolio.databaseList);
  const devOpsList = useSelector((state) => state.portfolio.devOpsList);
  const cyberSecurityList = useSelector((state) => state.portfolio.cyberSecurityList);
  const toolsList = useSelector((state) => state.portfolio.toolsList);

  const heading = "Skills";


  return (
    <section id="skills" className="fourthSection screenpage">
      <div className="skills-heading qualifications-heading">
        <h3>
          {heading.split("").map((word, index) => (
            <span key={index} className="hover-grow">{word}</span>
          ))}
        </h3>
      </div>


      <div className="skills-container">
        <h5 className="skill-languages-heading">Programming Languages</h5>
        <div className="skills-languages">
          
          {languagesList?.map((language, index) => (
            <div className="skills-container-elements" key={index}>
              <h4>{language.language}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <h5 className="skill-languages-heading">Frontend</h5>
        <div className="skills-languages">
          
          {frontendList?.map((frontEnd, index) => (
            <div className="skills-container-elements" key={index}>
              <h4>{frontEnd.frontEnd}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <h5 className="skill-languages-heading">Backend / Frameworks</h5>
        <div className="skills-languages">
          
          {backendList?.map((backend, index) => (
            <div className="skills-container-elements" key={index}>
              <h4>{backend.backend}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <h5 className="skill-languages-heading">Databases</h5>
        <div className="skills-languages">
          
          {databaseList?.map((database, index) => (
            <div className="skills-container-elements" key={index}>
              <h4>{database.database}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <h5 className="skill-languages-heading">DevOps & Cloud</h5>
        <div className="skills-languages">
          
          {devOpsList?.map((devOps, index) => (
            <div className="skills-container-elements" key={index}>
              <h4>{devOps.devOps}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <h5 className="skill-languages-heading">Cyber Security</h5>
        <div className="skills-languages">
          
          {cyberSecurityList?.map((cyberSecurity, index) => (
            <div className="skills-container-elements" key={index}>
              <h4>{cyberSecurity.cyberSecurity}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-container">
        <h5 className="skill-languages-heading">Tools & IDEs</h5>
        <div className="skills-languages">
          
          {toolsList?.map((tools, index) => (
            <div className="skills-container-elements" key={index}>
              <h4>{tools.ides}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
