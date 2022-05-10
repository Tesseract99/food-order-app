import cssClasses from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const showCartItems_ = () => {
    props.showCartItems(true);
    console.log("clicked");
  };

  return (
    <button className={cssClasses.button} onClick={showCartItems_}>
      <span className={cssClasses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cssClasses.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
