import React from "react";
import Startseite from "./Startseite";
import {Route, Routes} from 'react-router-dom';

export default function AllRoutes(){

    return(
        <>
            <Routes>
            <Route path={"*"} element={<Startseite/>}/>
            </Routes>
        </>
    )
}
