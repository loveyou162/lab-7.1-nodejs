import classes from "./AddProduct.module.css";
import { Form, redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const AddProduct = () => {
  return (
    <Form className={classes["product-form"]} method="post">
      <div className={classes["form-control"]}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="img">Image URL</label>
        <input type="text" name="img" id="img" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" />
      </div>
      <div className={classes["form-control"]}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className={classes.description}
        />
      </div>
      <button className={classes.btn} type="submit">
        Add Product
      </button>
    </Form>
  );
};
export default AddProduct;
export async function action({ request }) {
  const data = await request.formData();
  const productData = {
    title: data.get("title"),
    img: data.get("img"),
    price: data.get("price"),
    des: data.get("description"),
    id: uuidv4(),
  };
  console.log(productData);
  let url = "http://localhost:5000/";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("Could not fetch");
  }

  return redirect("/");
}
