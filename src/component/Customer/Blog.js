import React from 'react';
import './Blog.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
    const [dinput, setdinput] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/FinalYearProject/blogview.php').then(function(rese) {
            console.log(rese.data);
            setdinput(rese.data);
        });
    }

    return (
        <>
            <div id="Login" style={{marginLeft:'225px',marginTop:'40px'}}>
            <div className="text-center mb-5">
                            <header className="blogdesign">
                                <h2 className="display-20 display-md-18 display-lg-16">
                                    Most recent blog
                                </h2>
                            </header>
                        </div>
                <section>
                    <div className="container">
                        <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
                            {dinput.map((input, key) => (
                                <div key={key} className="col-lg-4 col-md-6 mb-2-6">
                                <article className="card card-style2">
                                    <div className="card-img">
                                    <img
                                        className="rounded-top"
                                        src={`http://localhost/FinalYearProject/blog/` + input.image}
                                        style={{ width: "100%", height: "350px" }}
                                    />
                                    <div className="date">
                                        <span>{input.date}</span>
                                    </div>
                                    </div>
                                    <div className="card-body">
                                    <h3 className="h5">
                                        <a href="#!">{input.title}</a>
                                    </h3>
                                    <p className="display-30">{input.message}</p>
                                    <a href="#!" className="read-more">
                                        read more
                                    </a>
                                    </div>
                                </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Blog;
