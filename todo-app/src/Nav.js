import React, {} from 'react';
import {
    NavLink
} from "react-router-dom";


function Nav() {
    return (
        <div>

            <div className={'p-5 text-center '} style={{backgroundColor: "#cc4631"}}>
                <ul>
                    <li className={'inline p-5'}>
                        <NavLink to="/about" activeClassName="underline text-white">
                            <span className={'text-xl text-white font-bold cursor-pointer'}>About</span>
                        </NavLink>
                    </li>
                    <li className={'inline p-5'}>
                        <NavLink to="/todos" activeClassName="underline text-white">
                            <span className={'text-xl text-white font-bold cursor-pointer'}>Todos</span>
                        </NavLink>
                    </li>
                    <li className={'inline p-5'}>
                        <NavLink to="/contact" activeClassName="underline text-white">
                            <span className={'text-xl text-white font-bold cursor-pointer'}>Contacts</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
