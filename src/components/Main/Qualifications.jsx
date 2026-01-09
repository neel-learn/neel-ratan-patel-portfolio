import { useSelector } from "react-redux";

const Qualifications = () => {

    const qualificationList = useSelector((state) => state.portfolio.qualificationList);

    const qualificaitonTitle = "Qualificaions"


    return (
        <div>
            <section id="qualifications" className="thirdSection screenpage">
            <div className="qualifications-heading">
                <h3>
                    {qualificaitonTitle.split("").map((letter, index) =>
                        <span key={index} className="hover-grow">{letter}</span>
                    )}
                </h3>
            </div>
            <div className="academic-Qualifications">
                
                    {qualificationList?.map((project, index) => (
                        <div className="qualification-container" key={index}>
                            <h4 className="qualificaiton-container-heading">{project.title}<sup>th</sup></h4>
                            <h4 className="qualification-container-body">
                                <ul>
                                    <li className="qualification-container-body-year">{project.session}</li>
                                    <li className="qualification-container-body-marks">{project.persentage}</li>
                                    <li className="qualification-container-body-collage">{project.collageName}</li>
                                </ul>
                            </h4>
                        </div>
                    ))}
            </div>
        </section>
        </div>
    );
};

export default Qualifications;