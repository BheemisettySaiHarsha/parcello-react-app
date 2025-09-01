// src/components/Error.js

import Header from "./Header";
import Footer from "./Footer";
import { useRouteError } from "react-router-dom";

const Err = () => {
    const err = useRouteError();

    // By using optional chaining (?.), this line will no longer
    // crash if 'err' is null. It will just result in 'undefined'.
    return (
        <div>
            <Header/>
            <h2>Oops! Something went wrong.</h2>
            <h3>{err?.status}: {err?.statusText}</h3>
            <Footer/>
        </div>
    )
}

export default Err;