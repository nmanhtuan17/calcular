import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';
import Context from '../../store/Context';
import { FaMoneyCheck } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import {MdCalculate} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
const Sidebar = () => {
    const [state, dispatch ] = useContext(Context)
    const [isLogin, setLogin] = useState(false)
    useEffect(()=> {
        if(Object.keys(state.userLogin).length !== 0){
            setLogin(true)
        }else{
            setLogin(false)
        }
    }, [state.userLogin])

    return <div className={isLogin === false ? 'sidebar d-none' : 'sidebar'}>
        <div className="sidebar__logo">
            <FaUserCircle/>
            <span>{state.userLogin.username}</span>
        </div>
        <div className="sidebar__menu">
            <NavLink to='/courses'  className={({ isActive }) => isActive ? "active" : ""} exact={true}>
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