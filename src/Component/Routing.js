import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Profile from "./Profile";
import Post from "./Post";
import PostDetails from "./PostDetails"

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            {/* To avoid refresh we must use Link, if we use <a></a> tag
                it will refresh the pages
            */}

            {/* Route tag must be part of BrowserRouter
            whereas Link tag can be used in any other component
            */}

            {/* history is for Redirection
                location is for queryParams
                match is for Params
            */}
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/post" component={Post} />
                    <Route path="/post/:topic" component={PostDetails}/>
                    <Route path="/profile" component={Profile} />
                </div>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;