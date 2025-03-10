// Header.js

import useSticky from '../../../hooks/use-sticky';
import Sidebar from '../../layout/headers/sidebar';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavMenu from './nav-menu';
import Preloader from './preloader'; // Import your Preloader component

const Header = () => {
    const { sticky } = useSticky();
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(true);

    // Simulate an asynchronous operation (e.g., fetching data)
    useEffect(() => {
        const fetchData = async () => {
            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            {/* Conditionally render the Preloader based on the loading state */}
            {/* {loading ? <Preloader /> : null} */}

            <header style={{height:"100px"}}>
                <div id="header-sticky" className={`tp-ptg-header dark-header black-bg p-relative ${sticky ? "header-sticky" : ""}`} style={{height:"100px"}}>
                    <div className="container-fluid p-0">
                        <div className="row align-items-center g-0 pl-20 justify-content-between">
                            <div className="col-xl-4 col-auto">
                                <div className="logo">
                                    <Link href="/"><img className='hero-logo' src="/assets/img/logo/logo.jpg" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-auto d-hidden">
                                <div className="main-menu da-menu">  
                                    <nav id="mobile-menu">
                                        <NavMenu />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-auto">
                                <div className="tp-header-search-nav d-flex align-items-center dark-header justify-content-end ">
                                    <div className="tp-header-nav tp-header-nav-2 d-flex" onClick={() => setIsActive(true)}  >
                                        <i className="flaticon-more"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar isActive={isActive} setIsActive={setIsActive} />
        </>
    );
};

export default Header;
