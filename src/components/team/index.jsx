import BreadcrumbArea from '../../common/breadcrumb-area';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import React from 'react';
import TeamArea from './team-area';

const Team = () => {
    return (
        <>
        <Header />
        <BreadcrumbArea acive_menu="Team"  title="Our Team" />
        <TeamArea />
        <Footer tp_border={true} />
        </>
    );
};

export default Team;