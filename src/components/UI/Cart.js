import cssClasses from "./Cart.module.css";
import Card from "./Card";
import Modal from "./Modal";

const cartItems = [
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 199,
  },
];

const Cart = (props) => {
  const showCartItems_ = () => {
    props.showCartItems(false);
  };

  return (
    <Modal showCartItems={props.showCartItems}>
      <div className={cssClasses["cart-items"]}>
        <ul>
          {cartItems.map((item) => {
            return (
              <>
                <li>
                  <div>{item.name}</div>

                  <div className={cssClasses.total}>Total Amount: 1000</div>
                </li>
              </>
            );
          })}
        </ul>
        <div className={cssClasses.actions}>
          <button
            className={cssClasses["button--alt"]}
            onClick={showCartItems_}
          >
            Close
          </button>
          <button className={cssClasses.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
