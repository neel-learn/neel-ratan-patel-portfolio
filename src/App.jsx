import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";

import "./App.css";

import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Background from "./components/Background";
import useAutoHideScrollbar from "./components/userAutoHideScrollbar";


function App() {

  const [loading, setLoading] = useState(true);


  useAutoHideScrollbar(loading);


  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2000);


    return () => clearTimeout(timer);

  }, []);


  return (
    <>
      <Background />

      <AnimatePresence mode="wait">

        {loading ? (

          <Loader key="loader" />

        ) : (

          <div key="content">

            <Header />

            <Main />

          </div>

        )}

      </AnimatePresence>
    </>
  );
}


export default App;