import React from "react";

const date = new Date();
const thisYear = date.getFullYear();

function Footer() {
    return (
        <footer>Copyright {thisYear}</footer>
    )
};

export default Footer;