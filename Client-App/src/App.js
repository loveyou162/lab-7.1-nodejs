import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout, { loader as RootLoader } from "./Pages/root";
import Shop from "./Pages/Shop";
import AddProduct, { action as AddAction } from "./Pages/AddProduct";
import Cart from "./Pages/cart";
import ProductList from "./Pages/productList";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader: RootLoader,
      id: "root",
      children: [
        { index: true, element: <Shop /> },
        { path: "cart", element: <Cart /> },
        { path: "product-list", element: <ProductList /> },
        {
          path: "add-product",
          element: <AddProduct />,
          action: AddAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
