import React from 'react';
import Navbar from '../Navbar.jsx'
import Banner from '../Banner.jsx';
import Footer from '../Footer.jsx';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Layout;