import "./css/Main.css";
import "./css/Massage.css";
import Home from "./Main/Home";
import About from "./Main/About";
import Qualifications from "./Main/Qualifications";
import Skills from "./Main/Skills";
import Projects from "./Main/Projects";
import Contacts from "./Main/Contacts";
import Footer from "./footer";
const Main = () => {
    return (
        <main>
        <Home></Home>
        <About></About>        
        <Qualifications></Qualifications>
        <Skills></Skills>
        <Projects></Projects>
        <Contacts></Contacts>
        <Footer></Footer>
    </main>
    );
};

export default Main;