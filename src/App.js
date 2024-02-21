import Heading from "./component/heading/heading";
import Body from "./component/Body/Body";
import Loader from "./component/loader/Loader";
import Error from "./component/error/Error";
import Login from "./component/login/login";
import { useState, lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
const About = lazy(() => import("./component/about/About"));
const Contact = lazy(() => import("./component/contact/Contact"));
const RestMenu = lazy(() => import("./component/restmenu/restmenu"));
const Applayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div id="app">
      <Heading login={[isLogin, setIsLogin]} />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restid",
        element: (
          <Suspense fallback={<Loader />}>
            <RestMenu />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default Applayout;
