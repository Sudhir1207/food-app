export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div>
            <img
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            />
            <h3>{item.name}</h3>
            <h3>
              {item.amount} {item.unit}
            </h3>
          </div>
        ))
      )}
      {}
    </div>
  );
}
