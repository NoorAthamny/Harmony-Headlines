/* eslint-disable no-unused-vars */
import "./App.css";
import News from "./components/news/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsList from "./components/newsList/NewsList";

const routerPath = createBrowserRouter([
  // { path: "/", element: <Home /> },
]);
{
  /* <RouterProvider router={routerPath} /> */
}
function App() {
  return (
    <>
      <NewsList />
    </>
  );
}

export default App;
