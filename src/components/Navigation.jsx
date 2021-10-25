import { Link } from 'react-router-dom';
import demosite from '../assets/DEMOSITE.svg';
import orderSvg from '../assets/order.svg';

const Navigation = (props) => {

    return (
        <nav>
            <div className='navWrapper'>
                <div className='navTop'>
                    <ul>
                        <Link to='/menu'>
                            <li className="navTopButton" onClick={() => props.doAddUrl('/menu')}>MENU</li>
                        </Link>
                        <Link to='/some-text'>
                            <li className="navTopButton" onClick={() => props.doAddUrl('/some-text')}>SOME TEXT</li>
                        </Link>
                        <Link to='/another-item'>
                            <li className="navTopButton" onClick={() => props.doAddUrl('/another-item')}>ANOTHER ITEM</li>
                        </Link>
                        <Link to='/one-more'>
                            <li className="navTopButton" onClick={() => props.doAddUrl('/one-more')}>ONE MORE</li>
                        </Link>
                        <Link to='/and-last-one'>
                            <li className="navTopLastOne navTopButton" onClick={() => props.doAddUrl('/and-last-one')}>AND LAST ONE</li>
                        </Link>
                    </ul>
                </div>
                <div className='navBottom'>
                    <div className='logo'>
                        <img alt="Logo" src={demosite} />
                    </div>
                    <div className='orderSvg'>
                        <img src={orderSvg} alt='Order'></img>
                        <div className="orderDropDown">
                            <span className='orderDropDownArrow'>&#9650;</span>
                            <div className='orderDropDownContainer'>
                                <ul>
                                    <Link to='/menu'>
                                        <li className='orderDropDownLastButtons' onClick={() => props.doAddUrl('/menu')}>MENU</li>
                                    </Link>
                                    <Link to='/some-text'>
                                        <li className='orderDropDownLastButtons' onClick={() => props.doAddUrl('/some-text')}>SOME TEXT</li>
                                    </Link>
                                    <Link to='/another-item'>
                                        <li className='orderDropDownLastButtons' onClick={() => props.doAddUrl('/another-item')}>ANOTHER ITEM</li>
                                    </Link>
                                    <Link to='/one-more'>
                                        <li className='orderDropDownLastButtons' onClick={() => props.doAddUrl('/one-more')}>ONE MORE</li>
                                    </Link>
                                    <Link to='/and-last-one'>
                                        <li className='orderDropDownLastButtons' onClick={() => props.doAddUrl('/and-last-one')}>AND LAST ONE</li>
                                    </Link>
                                    <li className='orderDropDownLastButtons orderDropDownSpace'>____________</li>
                                    <Link to='/'>
                                        <li onClick={() => props.doAddUrl('/')}>HOME</li>
                                    </Link>
                                    <Link to='/service'>
                                        <li onClick={() => props.doAddUrl('/service')}>SERVICE</li>
                                    </Link>
                                    <Link to='/works'>
                                        <li onClick={() => props.doAddUrl('/works')}>WORKS</li>
                                    </Link>
                                    <Link to="/about-me">
                                        <li onClick={() => props.doAddUrl('/about-me')}>ABOUT ME</li>
                                    </Link>
                                    <Link to="/contact">
                                        <li onClick={() => props.doAddUrl('/contact')}>CONTACT</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='navBottomButtons'>
                        <div>
                            <Link to='/'>
                                <span onClick={() => props.doAddUrl('/')}>HOME</span>
                            </Link>
                        </div>
                        <div>
                            <Link to='/service'>
                                <span onClick={() => props.doAddUrl('/service')}>SERVICE</span>
                            </Link>
                        </div>
                        <div className="worksButtonFromNav">
                            <span>WORKS</span>
                            <div className='dropDown'>
                                <div className='dropDownContainer'>
                                    <span className='dropDownArrow'>&#9650;</span>
                                    <div className='dropDownBox'>
                                        <ul>
                                            <Link to='/works'>
                                                <li onClick={() => props.doAddUrl('/works')}>ALL</li>
                                            </Link>
                                            <Link to="/works/graphic">
                                                <li onClick={() => props.doAddUrl('/works/graphic')}>GRAPHIC</li>
                                            </Link>
                                            <Link to="/works/design">
                                                <li onClick={() => props.doAddUrl('/works/design')}>DESIGN</li>
                                            </Link>
                                            <Link to="/works/logo">
                                                <li onClick={() => props.doAddUrl('/works/logo')}>LOGO</li>
                                            </Link>
                                            <Link to="/works/website">
                                                <li onClick={() => props.doAddUrl('/works/website')}>WEBSITE</li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/about-me">
                                <span onClick={() => props.doAddUrl('/about-me')}>ABOUT ME</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/contact">
                                <span onClick={() => props.doAddUrl('/contact')}>CONTACT</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;