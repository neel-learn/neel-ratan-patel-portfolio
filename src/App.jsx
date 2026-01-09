
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"
import Main from "./components/Main"
import './App.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPortfolioData } from "./store/portfolioSlice";



function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolioData())
  }, [dispatch]);

  return (
    <>
    
    <Header></Header>
    <Main></Main>

      
    </>
  )
}

export default App
