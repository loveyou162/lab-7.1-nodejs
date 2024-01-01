import { useRouteLoaderData } from "react-router";
import classes from "./shop.module.css";
// import classes from "../CSS/main.module.css";

const Shop = () => {
  const productData = useRouteLoaderData("root");
  console.log(productData);
  const productArr = Object.values(productData);
  console.log(productArr);
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
            <button className={classes["btn"]}>Add to Cart</button>
          </div>
        </article>
      ))}
    </div>
  );
};
export default Shop;
