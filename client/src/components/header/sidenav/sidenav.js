import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenavitems'

const Nav = (props) => {
    return (
        <SideNav
            showNav={props.shownav}
            onHideNav={props.onhidenav}
            navStyle={{
                background:'#242424',
                maxWidth:'220px'
            }}
        >
            <SidenavItems />
        </SideNav>

        
    );
};

export default Nav