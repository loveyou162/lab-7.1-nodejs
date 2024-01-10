import { redirect, useRouteLoaderData } from "react-router";
import classes from "./shop.module.css";
// import classes from "../CSS/main.module.css";

const Shop = () => {
  const productData = useRouteLoaderData("root");
  console.log(productData);
  const handleSubmit = async (event, product) => {
    event.preventDefault();
    await action(product);
  };
  return (
    <div className={classes["grid"]}>
      {productData.map((product, index) => (
        <article
          key={index}
          className={`${classes.card} ${classes["product-item"]}`}
        >
          <header className={classes["card__header"]}>
            <h1 className={classes["product__title"]}>{product.title}</h1>
          </header>
          <div className={classes["card__image"]}>
            <img src={product.img} alt="A Book" />
          </div>
          <div className={classes["card__content"]}>
            <h2 className={classes["product__price"]}>${product.price}</h2>
            <p className={classes["product__description"]}>{product.des}</p>
          </div>
          <div className={classes["card__actions"]}>
            <form onSubmit={(event) => handleSubmit(event, product)}>
              <button className={classes["btn"]}>Add to Cart</button>
              <input type="hidden" name="id" value={product.id} />
            </form>
          </div>
        </article>
      ))}
    </div>
  );
};
export default Shop;
export async function action(product) {
  const response = await fetch("http://localhost:5000/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error("Could not fetch");
  }

  return redirect("/cart");
}
