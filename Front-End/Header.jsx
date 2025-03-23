    /*Header.jsx */
    import logo from '../src/assets/images/LOGO2.png';
    import AccountCircleIcon from '@mui/icons-material/AccountCircle';
    import "./Header.css";
    import React from "react";

    function Header({ navigationText }) {
        return (
            <nav className='header_container'>
                {/*Logo Container*/}
                <div className='header_logo_container'>
                    <img src={logo} alt="Verde Logo" className="header_logo" />                
                </div>

                <div className="navigation_display_container">
                    <header className="header">
                        <h2>{navigationText}</h2>
                    </header>
                </div>

                {/* User Greeting Section */}
                <div className="user_greeting_container">
                    <AccountCircleIcon className="user_icon" />
                    <div className="user_text">
                        <p className="hello_text">Hello, Ralph Diocera</p>
                        <p className="user_role">User</p>
                    </div>
                </div>
            </nav>
        );
    };

    export default Header;