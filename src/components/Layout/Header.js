import React from "react";
import mealsTableImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>Sumurai's Kicks</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsTableImg} alt="food on table" />
      </div>
    </React.Fragment>
  );
};

export default Header;
