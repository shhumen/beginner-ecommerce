import {Link} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <header className='header'>
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className="fas fa-border-all"></span>
                        <h4>Categories <i className='fa fa-chevron-down'></i></h4>
                    </div>
                    <div className="navLink">
                        <ul className={mobileMenu ? "nav-links-mobileMenu" : "link f_flex capitalize"}
                            onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>home</Link>
                            </li>
                            <li>
                                <Link to='/pages'>pages</Link>
                            </li>
                            <li>
                                <Link to='/user'>user accounts</Link>
                            </li>
                            <li>
                                <Link to='/vendor'>vendor account</Link>
                            </li>
                            <li>
                                <Link to='/track'>track my order</Link>
                            </li>
                            <li>
                                <Link to='/contact'> contact</Link>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobileMenu(!mobileMenu)}>
                            {
                                mobileMenu ?
                                    <i className='fas fa-times close home-btn'></i> :
                                    <i className="fas fa-bars open"></i>

                            }
                        </button>
                    </div>
                </div>

            </header>
        </>
    )
}


export default Navbar