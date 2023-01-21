import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './CSS/main.css'
import send from '../pics/send.jpg'
import waterMarked from '../pics/watermarkedNot.jpg'
import receive from '../pics/receive.jpg'
import hold from '../pics/hold.jpg'
import creditCards from '../pics/credit-cards.jpg'
import onlineShopping from '../pics/online-shopping.jpg'
import banking from '../pics/banking.jpg'
import room from '../pics/room.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Main = () => {
    return (

        <main>
            <section className='headline-section two-third'>
                <div className='content-box'>
                    <div className="cb-column headline-column">
                        <h1>Выгодный и быстрый способ отправлять деньги за границу.</h1>
                        <div className='mid-box'> 
                        <button className='play-button'> <PlayArrowIcon sx={{fontSize: 60}} /></button> <a href="http://" target="_blank" rel="noopener noreferrer">посмотрите как это работает</a>
                        </div>
                        <div className='box-flex headline-undertext'>
                            <div className='undertext-item'> <p>Более 15 миллионов пользователей</p> <a href="http://" target="_blank" rel="noopener noreferrer">подробнее на Trustpilot</a></div>
                            <div className='undertext-item'> <p>регулируется FCA</p> <a href="http://" target="_blank" rel="noopener noreferrer"> Узнать больше</a></div>
                        </div>
                         </div>
                    <div className="cb-column calculator-container">
                        <div className='calculator'>
                            <div className="money-input">
                                <div className="input-field">
                                <label htmlFor="calculator-source">Вы отправляете ровно</label>
                                <input type="text" placeholder='1 000' id='calculator-source' />
                                </div>
                                <div className="currency-toggler">
                                    <button id='currency-toggle'> KGS</button>
                                </div>
                            </div>
                            <ul className="sequence">
                                <li><span  className='sequence-icon'>-</span> <span className='sequence-text'>4.895 $</span></li>
                                <li><span className='sequence-icon'>=</span> <span className='sequence-text'>1000</span><span className='sequence-text' > Конвертируемая сумма</span></li>
                                <li><span className='sequence-icon'>x</span> <span className='sequence-text'>1.1823</span> <span className='sequence-text'>Гарантированный курс</span> </li>

                            </ul>
                            <div className="money-input">
                                 <div className="input-field">
                                <label htmlFor="calculator-source">Получатель получит </label>
                                <input type="text" placeholder='1 000' id='calculator-output' />
                                </div>
                                <div className="currency-toggler">
                                    <button id='currency-out-toggle'> KGS</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className='guarantees-box'>
                            <div className="calc-undertext c-u-left">В сравнении с банком вы экономите: <br /> <strong>36,25 $</strong></div>
                            <div className="calc-undertext">Поступит: <br /> <strong>понедельник</strong></div>
                        </div>
                        <div className='calc-extra-info'>
                            <button>Сравнить цены</button>
                            <button>Начать</button>
                        </div>
                    </div>

                </div>
            </section>
            <section className='mobile-app-section'>
                <div className='region-select'>
                    <h3>Доступно для вас в Киргизии, России и т.д.  </h3>
                </div>
                <div className='pic-hall'>
                    <div>
                        <img className='phone-pic' src={send} alt="" />
                        <p className='title'>Отправляйте деньги дешевле и проще, чем используя услуги старомодных банков.</p>
                        <p className='descr'>Отправляйте деньги по реальному обменному курсу без скрытых комиссий.</p>
                    </div>
                    <div>
                        <img src={waterMarked} alt="" className="phone-pic" />
                        <p className='title'>Совершайте покупки за рубежом без скрытых комиссий.</p>
                        <p className='descr'>Наша карта пока еще недоступна в стране: Киргизия.</p>
                    </div>
                    <div>
                        <img src={receive} alt="" className="phone-pic" />
                        <p className='title'>Получайте платежи так, как это делают местные, в 9 валютах.</p>
                        <p className='descr'>Получите ваш собственный номер счета Великобритании, IBAN для евро, маршрутный номер США и др.</p>
                    </div>
                    <div>
                        <img src={hold} alt="" className="phone-pic" />
                        <p className='title'>Конвертируйте и храните средства в 49 валютах.</p>
                        <p className='descr'>Хранение средств в разных валютах совершенно бесплатно. Также мы используем реальный обменный курс при конвертации.</p>
                    </div>
                </div>

            </section>
            <section className='pic-text-section'> 
                <img src={creditCards} alt="" />
                <div className='text-container'>
                    <p className="headline">Переехать за границу стало проще простого</p>

                    <p className="bold-title">Получайте вашу зарплату, пенсию и многие другие выплаты.</p>
                    <p className="descr">Переезжайте легко и без необходимости открывать новые банковские счета. Сообщите ваши банковские реквизиты вашему работодателю, пенсионному департаменту, семье и друзьям и получайте деньги, как это делают местные.</p>

                    <p className="bold-title">Расплачивайтесь вашей картой в местной валюте.</p>
                    <p className="descr">Забудьте о походах в банк для открытия счета и начните совершать покупки сразу по прибытии в страну назначения. С дебетовой картой MyMia вам всегда доступен самый выгодный обменный курс.</p>

                    <p className="bold-title">Перемещайте ваши деньги между странами.</p>
                    <p className="descr">Отправляйте деньги в 80 стран по низким и прозрачным комиссиям за перевод. С прямым дебетованием в Великобритании, Европе, США и Канаде, оплачивать счета и подписки в разных валютах легко, как никогда раньше.</p>



                </div>
            </section>
                        <section className='pic-text-section'> 
                <div className='text-container'>
                    <p className="headline">Покупки онлайн в зарубежных магазинах</p>

                    <p className="bold-title">Совершайте покупки по реальному обменному курсу.</p>
                    <p className="descr">Избегайте скрытого банковского обменного курса с наценкой, а также высоких комиссий за иностранные операции. Платите только заранее известную вам комиссию за конвертацию, без годовой оплаты за использование дебетовой карты.</p>

                    <p className="bold-title">Всегда платите в местной валюте.</p>
                    <p className="descr">При совершении покупок онлайн всегда выбирайте валюту той страны, в которой оплачиваете заказ. Если на вашем счете нет необходимой валюты, мы автоматически сконвертируем средства с доступного счета с наиболее выгодным обменным курсом. Таким образом вы избежите комиссии за динамическую конвертацию валюты.</p>

                    <p className="bold-title">Совершайте онлайн покупки безопасно и получайте мгновенные уведомления.</p>
                    <p className="descr">Подтверждайте платежи с технологией 3-D Secure. Получайте мгновенные уведомления при совершении оплаты.</p>
                </div>

                <img src={onlineShopping} alt="" />
            </section>
                         <section className='pic-text-section'> 
                <div className='text-container'>
                    <p className="headline">Получайте платежи со всего мира</p>

                    <p className="bold-title">Получайте платежи как это делают местные.</p>
                    <p className="descr">Номер счета Великобритании, IBAN для евро, маршрутный номер США и др. Все в пределах одного счета. Получайте зарплату, платежи по счетам, пенсию и дивиденды по акциям.</p>

                    <p className="bold-title">Работайте в любой точке земного шара и используйте ваш счет с Amazon, PayPal и другими платформами.</p>
                    <p className="descr">Используйте реквизиты вашего счета для получения и управления вашими доходами. Выставляйте счета и управляйте вашими доходами с различных онлайн- и оффлайн-платформ так, как это делают местные.</p>

                    <p className="bold-title">Конвертируйте ваши деньги мгновенно.</p>
                    <p className="descr">Получайте платежи со всего мира и конвертируйте их в 49 валют(ы). Вы всегда получите реальный обменный курс и те самые низкие комиссии, которыми мы известны.</p>
                </div>

                <img src={banking} alt="" />
            </section>
            <section className='pic-text-section'> 
                <img src={room} alt="" />
                <div className='text-container'>
                    <p className="headline">Управляйте недвижимостью без стресса</p>

                    <p className="bold-title">Сэкономьте при покупке недвижимости за границей.</p>
                    <p className="descr">Переводы и управление деньгами с MyMia в среднем в 6 раз дешевле услуг международных банков. Мы применяем гибкое ценообразование для переводов крупных сумм, поэтому за переводы свыше 100 000 USD или эквивалента в вашей валюте комиссия будет еще более привлекательной.</p>

                    <p className="bold-title">Оплачивайте счета онлайн.</p>
                    <p className="descr">Храните 49 валют на одном счете. Легко управляйте вашими ипотечными выплатами и коммунальными платежами в разных валютах с помощью платежей прямого дебета в Великобритании, Европе, США и Канаде. Осуществляйте платежи, как это делают местные.</p>

                    <p className="bold-title">Получайте платежи от ваших арендаторов.</p>
                    <p className="descr">Получайте платежи в 9 валюте(-ах) на собственные реквизиты счета. И когда курс будет подходящим, конвертируйте ваши деньги за считанные секунды.</p>



                </div>
            </section>
            <section className='getting-started'>
                <div className="gs-txt-box">
                    <p>Как начать?</p>
                    <h2>Зарегистрируйте профиль и начните расплачиваться вашей картой за считанные минуты.</h2>
                </div>
                <div className="gs-steps">
                    <div>
                        <h3 className='title'>Зарегистрируйтесь</h3>
                        <p className="descr">Зарегистрируйтесь онлайн или в нашем приложении, используя адрес эл. почты. Или войдите с помощью аккаунта в Google, Facebook или Apple.</p>
                    </div>
                    <div>
                        <h3 className='title'>Подтвердите вашу личность</h3>
                        <p className="descr">Чтобы начать получать деньги или заказать карту, все, что вам нужно — это ваше удостоверение личности.</p>
                    </div>
                    <div>
                        <h3 className='title'>Пополните ваш счет</h3>
                        <p className="descr">Вы можете пополнить счет, используя ваш банковский счет, Apple Pay или кредитную/дебетовую карту.</p>
                    </div>
                    <div> <CheckCircleOutlineIcon sx={{fontSize:70}} />
                    <p className="descr">Поделитесь реквизитами вашего счета, чтобы получать платежи, или расплачивайтесь дебетовой картой по всему миру.</p>
                     </div>

                </div>
                <a className="gs-redirect" href="http://" target="_blank" rel="noopener noreferrer">Открыть счет за несколько минут</a>
            </section>
       </main>

    );
};

export default Main;