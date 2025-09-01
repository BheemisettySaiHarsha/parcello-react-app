// App.js
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Err from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import Company from "./components/Company";
import ContactUs from "./components/ContactUs";
import Legal from "./components/Legal";
import LifeAtParcello from "./components/LifeAtParcello";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";







const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Guest");
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const savedUserName = localStorage.getItem("userName");
    
    if (isLoggedIn && savedUserName) {
      setUserName(savedUserName);
    } else {
      setUserName("Guest");
    }
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout/>,
//     errorElement: <Err/>, 
//     children: [
//       {
//         path: "/",
//         element: <Body/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
//       {
//         path: "/restaurant/:resId",
//         element: <RestaurantMenu/>
//       },
//       {
//         path: "/grocery",
//         element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
//       },
//       {
//         path: "/cart",
//         element: <Cart/>
//       },
//       {
//         path: "/login",
//         element: <Login/>
//       },
//       {
//   path: "/checkout",
//   element: <Checkout/>
// },
// {
//   path: "/order-success", 
//   element: <OrderSuccess/>
// },
// {
//   path: "/company",
//   element: <Company/>
// },
// {
//   path: "/contact-us",
//   element: <ContactUs/>
// },
// {
//   path: "/legal",
//   element: <Legal/>
// },
// {
//   path: "/life-at-parcello",
//   element: <LifeAtParcello/>
// },
// {
//   path: "/privacy-policy",
//   element: <PrivacyPolicy/>
// },
// {
//   path: "/terms-of-service",
//   element: <TermsOfService/>
// }
//     ]
//   }
// ]);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Err/>, 
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/order-success", 
        element: <OrderSuccess/>
      },
      {
        path: "/company",
        element: <Company/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/legal",
        element: <Legal/>
      },
      {
        path: "/life-at-parcello",
        element: <LifeAtParcello/>
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService/>
      },
      // Add this catch-all route at the end
      {
        path: "*",
        element: <Err/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
