import React ,{ useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './sidenav/sidenav';

const Header = () => {
    
    const [shownav,setshownav] = useState(false);

    const hidenav= () =>{
        setshownav(false);
    }
    return (
        <header>
            <div className="open_nav">
                <FontAwesome name="bars" 
                    onClick={()=>setshownav(true)}
                    style={{
                        color:'#fffff',
                        padding:'10px',
                        cursor:'pointer'
                    }}
                />
            </div>
            <Nav 
            shownav={shownav}
            onhidenav={()=>hidenav()}/>
            
            <Link to="/" className="logo" >
                The Book Shelf
            </Link>
            
        </header>
    );
};

export default Header;