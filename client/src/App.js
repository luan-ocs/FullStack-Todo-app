import React, { useEffect } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Board from "./components/Board";
import { useDispatch } from "react-redux";
import { getLists } from "./actions/lists";
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLists());

  }, [dispatch]) 

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Board/>
      <Footer/>
    </div>
  );
}

export default App;