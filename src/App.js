import Header from "./components/Layout/Header";
import React from "react";
import "./App.css";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
