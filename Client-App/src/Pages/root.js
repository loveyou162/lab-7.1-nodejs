import { Outlet } from "react-router";
import NavBar from "../component/header";
const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
export async function loader() {
  const response = await fetch("http://localhost:5000/");
  if (!response.ok) {
    throw new Error("17: Fetch error");
  }
  const resData = await response.json();
  return resData;
}
