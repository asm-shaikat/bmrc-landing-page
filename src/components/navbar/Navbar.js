import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className="navbar  bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='dark:text-white'>
                                <Link className='dark:text-white'>Home</Link>
                            </li>
                            <li tabIndex={0} className='dark:text-white'>
                                <Link className="justify-between">
                                    Cources
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100">
                                    <li className='dark:text-white'><Link>Submenu 1</Link></li>
                                    <li className='dark:text-white'><Link>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li className='dark:text-white'><Link>News</Link></li>
                            <li className='dark:text-white'><Link>Committee</Link></li>
                            <li className='dark:text-white'><Link to="/#gallery">Gallery</Link></li>
                            <li className='dark:text-white'><Link>About</Link></li>

                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl text-white dark:text-white">BMRC</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    <li className='text-white dark:text-white'><Link to="/">Home</Link></li>
                        <li tabIndex={0} className='dark:text-white'>
                            <Link className='text-white'>
                                Cources
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                                <li className='text-white'><Link>Submenu 1</Link></li>
                                <li className='text-white'><Link>Submenu 2</Link></li>
                            </ul>
                        </li>
                        <li className='text-white dark:text-white'><Link>News</Link></li>
                        <li className='text-white dark:text-white'><Link>Committee</Link></li>
                        <li className='text-white dark:text-white'><Link>Gallery</Link></li>
                        <li className='text-white dark:text-white'><Link>About</Link></li>
                    </ul>
                </div>
                
            </div>
        </>
    );
};

export default Navbar;