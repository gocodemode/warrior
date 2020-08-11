import React, { Component } from 'react';

const styles = {
    all : {
        backgroundColor: "#F4D1CE"
    }
}

class Home extends Component {
    render() {
        return (
            <div style={styles.all}>
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default Home;
