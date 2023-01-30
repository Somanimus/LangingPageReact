import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../pics/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './CSS/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="nav-container">
            <div className="footer-columns">
                <h3 className="title">Компания и наша команда</h3>
                <Link to="/our-team">Компания и наша команда</Link>
                <a href="http://" target="_blank" rel="noopener noreferrer">Новости и блог</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Пресса о нас</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Вакансии</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Партнеры и сотрудничество</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Положение по борьбе со современным рабством</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">MyMia для бизнеса</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Связь с инвесторами</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Дорожная карта нашей миссии</a>
            </div>
            <div className="footer-columns">
                <h3 className="title">Служба поддержки клиентов</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">Центр поддержки</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Среднерыночный курс</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Статус услуги</a>
            </div>
            <div className="footer-columns">
                <h3 className="title">Подробнее</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">Международные переводы</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Swift/BIC коды</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Конвертер валют</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">коды IBAN</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Оповещeния об изменении курса валют</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Сравнить курсы валют</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Безопасность</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Генератор счетов-фактур</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Business Calculators</a>
            </div>
            <div className="socials ">
                <h3 className="title">Мы в социальных сетях</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <InstagramIcon/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <TwitterIcon/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"> <FacebookIcon/></a>
            </div>
            </div>
            <div className="copyright">
                <div className="logo"><Link to='/'> <img src={logo} alt="logo" /> MyMia</Link></div>
            </div>
        </footer>
   );
};

export default Footer;