import cssClasses from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={cssClasses.form}>
      <Input
        label="Quantity"
        input={{
          type: "number",
          id: "amount",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
