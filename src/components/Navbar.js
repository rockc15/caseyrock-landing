import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='navContainer'>
                <nav>
                    <div >
                        <NavLink className='link'exact activeClassName='active' to='/'>Home</NavLink>
                    </div>
                    <div >
                        <NavLink className='link' activeClassName='active' to='/resume'>Resume</NavLink>
                    </div>
                    {/* <div >
                        <NavLink className='link' activeClassName='active' to='/mission'>Our Mission</NavLink>
                    </div>
                    <div>
                        <NavLink className='link' activeClassName='active' to='/team'>Our Team</NavLink>
                    </div> */}
                    {/* <div>
                        <NavLink className='link' activeClassName='active' to='/blog'>Blog</NavLink>
                    </div> */}
                    <div>
                        <NavLink className='link' activeClassName='active' to='/press'>Press</NavLink>
                    </div>
                </nav>

            </div>
        );
    }
}