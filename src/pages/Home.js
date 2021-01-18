import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="home">

            <div className="home__header">
               <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
               </div>

               <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar
                        src="data:image/jpeg;base64,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"
                        style={{border: "1px solid green"}}
                    />
               </div>
            </div>

            <div className="home__body">
            <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                    alt=""/>
                <div className="home__inputContainer">
                   
                   <Search />
                   
                </div>
            </div>
        </div>
    );
};

export default Home;