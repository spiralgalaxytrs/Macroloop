import useSticky from '@/hooks/use-sticky';
import Sidebar from '@/src/layout/headers/sidebar';
import Link from 'next/link';
import React, {useState} from 'react';
import NavMenu from './nav-menu';

const Header = () => {
    const { sticky } = useSticky();
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header>
        <div id="header-sticky" className={`tp-ptg-header dark-header black-bg p-relative ${sticky ? "header-sticky" : ""}`}>
            <div className="container-fluid p-0">
                <div className="tp-ptg-header__main pl-20">
                    <div className="row align-items-center g-0">
                        <div className="col-xl-4 col-8">
                            <div className="logo">
                                <Link href="/"><img width={200} src="/assets/img/logo/dark-logo.png" alt="logo" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-9 d-none d-xl-block">
                            <div className="main-menu ptg-menu">  
                                <nav id="mobile-menu">
                                    <NavMenu />
                                 </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-4">
                            <div className="tp-header-search-nav d-flex align-items-center justify-content-end">
                            
                                
                                <div className="tp-header-nav tp-header-nav-2" onClick={() => setIsActive(true)}>
                                    <i className="flaticon-more"></i>
                                </div>
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