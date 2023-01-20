import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { ArrowDropDown } from '@mui/icons-material';
import './CSS/header.css'
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
    const [burgerClass, setBurgerClass] = useState('menu-container unclicked')
    const [isMenuClicked, toggleMenuClick] = useState(false)
    const [langClass, setLangClass] = useState('drp-clck unclicked')
    const [featClass, setfeatClass] = useState('drp-clck unclicked')
    const [isLangClicked, setLangClicked] = useState(false)
    const [isFeatClicked, setFeatClicked] = useState(false)


    const langClick = () => {
        if(!isLangClicked){
            setLangClass('drp-clck clicked')
        }
        else{
            setLangClass('drp-clck unclicked')
        }
        setLangClicked(!isLangClicked)
    }
    const featClick = () => {
        if(!isFeatClicked){
            setfeatClass('drp-clck clicked')
        }
        else{
            setfeatClass('drp-clck unclicked')
        }
        setFeatClicked(!isFeatClicked)
    }
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('menu-container clicked')
        }
        else{
            setBurgerClass('menu-container unclicked')
        }
        toggleMenuClick(!isMenuClicked)
    }
    return (
        <header>
            <nav>
            <div className="logo"> <a href="http://" target="_blank" rel="noopener noreferrer">KASSA24</a> </div>
            <ul className='public-nav box-left'>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='active left-link'>Частный счет</a>
                </li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Бизнес</a>
                </li>
            </ul>

            <ul className='public-nav box-middle'>
                <li className='dropdown'>
                   <p>Функции <ArrowDropDown font-size="medium"/> </p>
                    <ul className='dropdown-content'>
                        <p>мультивалютный счет</p>
                        <p>переводы крупных сум</p>
                    </ul>
 
                </li>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Цены</a>
                </li>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Помощь</a>
                </li>
                <li className='dropdown'>
                    <ul className="dropdown-content">
                        <p>Английский</p>
                        <p>Русский</p>
                        <p>Кыргызский</p>
                    </ul>
                    <p><LanguageIcon fontSize="small"/>Язык <ArrowDropDown/> </p>
                </li>
            </ul>

            <ul className='public-nav box-right'>
                <li className='log-in'>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Войти</a>
                </li>
                <li className='register'>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='link-button'>Зарегистрироваться</a>
                </li>
            </ul>


            <div className="burger-menu">
                <button onClick={updateMenu}>{isMenuClicked? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/> }</button>
                <div className={burgerClass}>
             <ul className='burger-nav row-top '>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='active left-link'>Personal</a>
                </li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">Business</a>
                </li>
            </ul>

            <ul className='burger-nav row-middle'>
                <li className='dropdown'>
                   <p onClick={featClick} className="pointer">Features <ArrowDropDown font-size="medium"/> </p>
                    <ul className={featClass}>
                        <p>height</p>
                        <p>width    </p>
                    </ul>
 
                </li>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Pricing</a>
                </li>
                <li>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Help</a>
                </li>
                <li className='dropdown'>
                    <p onClick={langClick} className="pointer"><LanguageIcon fontSize="small"  />Language <ArrowDropDown/> </p>
                    <ul className={langClass}>
                        <p>English</p>
                        <p>Russian</p>
                        <p>Kyrgyz</p>
                    </ul>
                </li>
            </ul>

                </div>
            </div>

</nav>
                    </header>
   );
};

export default Header;