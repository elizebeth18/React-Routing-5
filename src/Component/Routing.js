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
            {/* Components that are common must be mentioned
                inside the BrowserRouter 
            */}

            <Header />
            

            {/* Route tag must be part of BrowserRouter
            whereas Link tag can be used in any other component
            */}
            
                <div className="container">
                    {/* The components that will dynamically change
                        must be mentioned in the Route  
                    */}

                    {/* => exact attribute in the 
                        Route component will match
                        only the exact path 
                        => whatever is mentioned after ':' in 
                        the path attribute must be passed 
                    */}

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