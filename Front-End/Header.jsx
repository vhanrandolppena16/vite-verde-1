import logo from '../src/assets/images/verde-logo.png';
import "./Header.css";

function Header(){
    return (
        <nav className='header_container'>
            {/*Logo Container*/}
            <div className='header_logo_container'>
                <img src={logo} alt="Verde Logo" className="header_logo" />                
            </div>
        </nav>
    )
}