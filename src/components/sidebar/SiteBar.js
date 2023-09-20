import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

import { FaMoneyCheck } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import {MdCalculate} from 'react-icons/md'
const Sidebar = () => {




    return <div className='sidebar'>
        <div className="sidebar__logo">
            <i className='bx bx-user sidebar__icon'></i>
            <span>A41906</span>
        </div>
        <div className="sidebar__menu">
            <NavLink to='/'  className={({ isActive }) => isActive ? "active" : ""} exact={true}>
                <div className={'sidebar__menu__item '}>
                    <div className="sidebar__menu__item__icon">
                        <AiFillHome />
                    </div>
                    <div className="sidebar__menu__item__text">
                        Môn học
                    </div>
                </div>
            </NavLink>
            <NavLink to='/tuition' className={({ isActive }) => isActive ? "active" : ""}>
                <div className='sidebar__menu__item '>
                    <div className="sidebar__menu__item__icon">
                        <FaMoneyCheck />
                    </div>
                    <div className="sidebar__menu__item__text">
                        Học phí
                    </div>
                </div>
            </NavLink>
            <NavLink to='/calcular' className={({ isActive }) => isActive ? "active" : ""}>
                <div className='sidebar__menu__item '>
                    <div className="sidebar__menu__item__icon">
                        <MdCalculate />
                    </div>
                    <div className="sidebar__menu__item__text">
                        Tính học phí
                    </div>
                </div>
            </NavLink>
        </div>
    </div>;
};

export default Sidebar;