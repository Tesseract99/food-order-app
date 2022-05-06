import cssClasses from "./AvailableMeals.module.css";
import AvailableMealsCard from "./AvailableMealsCard";
import Meals from "./Meals";
import DUMMY_MEALS from "./DummyMeals";
import Card from "../UI/Card";

const AvailableMeals = (props) => {
  const meals = DUMMY_MEALS.map((meal) => {
    return (
      <li>
        <AvailableMealsCard
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      </li>
    );
  });

  return (
    <section className={cssClasses.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
