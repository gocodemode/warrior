import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    footer: { position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "gray",
        color: "white",
        },
    alignRight: { textAlign: "right"},
    alignLeft: { textAlign: "left"}
}


const Footer = () => {
    return (
        <div>
            <footer style={styles.footer}>
  <p style={styles.alignRight}>Copyright Warrior</p> <p style={styles.alignRight}>Instructor ?<Link to="/login"></Link></p>
</footer>
        </div>
    );
};

export default Footer;

