import React, { Component } from 'react';
import Navbar from "../../components/Nav/Nav";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default Home;
