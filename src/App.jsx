import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPortfolioData } from "./store/portfolioSlice";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background";
import useAutoHideScrollbar from "./components/userAutoHideScrollbar";

function App() {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.portfolio.status);
  const loading = status === "loading" || status === "idle";

  useAutoHideScrollbar(loading);

  useEffect(() => {
    dispatch(fetchPortfolioData());
  }, [dispatch]);

  return (
    <>
      <Background/>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div key="content">
            <Header/>
            <Main/>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
