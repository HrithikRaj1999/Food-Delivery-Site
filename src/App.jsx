import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import UserContext from "./context/UserContext";
import { Provider } from "react-redux";
import { appStore, persistor } from "./utils/appStore";
import { PersistGate } from 'redux-persist/lib/integration/react';

/**
 * Header
 *  -logo
 *  -nav-items
 * Body
 *  -search
 *  -res card
 *      -Img
 *      -name, rating star, cuisines
 * Footer
 *  -copyright
 *  -Links
 *  -Address
 *  -contact
 */

// on demand loading, reduces the stress on UI, the more the lazy loading the better
// minified js file is only generated upon grocery is called.
// used to build large projects.
// light weight and optimized.
// used to distribute the load thus to reduce the bundle size we do dynamic/ on demand import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();
    const { place } = useContext(UserContext);
    useEffect(() => {
        //Make and API call and send user and password if correct then log in user
        const data = {
            name: "Jesus Christ ✅ ",
        };
        setUserName(data.name);
    }, []);

    return (
        //Provide our appStore to our whole app
        <Provider store={appStore}>
            {/* now loggedInUser can be */}
            <PersistGate loading={null} persistor={persistor}>
                <UserContext.Provider value={{ LoggedInUser: userName, place: place, setUserName }}>
                    <div className="app flex flex-col min-h-screen">
                        <div>
                            <Header />
                        </div>

                        <div className="flex-grow mt-40 mx-8">
                            <Outlet />
                        </div>

                        <div className="footer mt-auto">
                            <Footer />
                        </div>
                    </div>
                </UserContext.Provider>
            </PersistGate>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading......</h1>}>
                        {" "}
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading..........</h1>}>
                        <Grocery />
                    </Suspense>
                ), //suspense act as a handler for catching any error and if loading.
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
