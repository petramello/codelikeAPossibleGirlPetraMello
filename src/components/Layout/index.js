import React from 'react'
import { useLocation } from "react-router";

import { MainContainer} from "./styled";

import HeaderMenu from "../HeaderMenu";
import Footer from "../Footer";
import ArrowTop from "../ScrollToTop/ArrowTop";

const Layout = props => {

    const location = useLocation()

    return (
        <MainContainer>
            <HeaderMenu />
            <main>{props.children}</main>
            {props.hideArrowPaths.includes(location.pathname) ? null: <ArrowTop />}
            <Footer />
        </MainContainer>
    )
}
export default Layout