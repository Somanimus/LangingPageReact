import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './CSS/main.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Main = () => {
    return (

        <main>
            <section className='headline-section two-third'>
                <div className='content-box'>
                    <div className="cb-column">
                        <h1>The cheap, fast way to send money abroad.</h1>
                        <div className='mid-box'> 
                        <button className='play-button'> <PlayArrowIcon sx={{fontSize: 60}} /></button> <a href="http://" target="_blank" rel="noopener noreferrer">see how it goes</a>
                        </div>
                        <div className='box-flex'>
                            <div> <p>lorem ipsum</p> <a href="http://" target="_blank" rel="noopener noreferrer">dolor sit</a></div>
                            <div> <p>dolor sit amet</p> <a href="http://" target="_blank" rel="noopener noreferrer"> amet upsum</a></div>
                        </div>
                         </div>
                    <div className="cb-column empty"></div>
                </div>
            </section>
            <section className='mobile-app-section'>
                <div className='region-select'>
                    <h3>Available for you in Kyrgyzstan, Russia, etc. </h3>
                </div>
                <div className='pic-hall'>
                    <div>
                        <img className='phone-pic' src="/send.jpg" alt="" />
                        <p className='title'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='descr'>world Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cupiditate.</p>
                    </div>
                    <div>
                        <img src="/watermarked.jpg" alt="" className="phone-pic" />
                        <p className='title'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='descr'>world Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cupiditate.</p>
                    </div>
                    <div>
                        <img src="/receive.jpg" alt="" className="phone-pic" />
                        <p className='title'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='descr'>world Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cupiditate.</p>
                    </div>
                    <div>
                        <img src="/hold.jpg" alt="" className="phone-pic" />
                        <p className='title'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='descr'>world Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cupiditate.</p>
                    </div>
                </div>

            </section>
            <section className='pic-text-section'> 
                <img src="/credit-cards.jpg" alt="" />
                <div className='text-container'>
                    <p className="headline">Moving and living abroad just got simpler</p>

                    <p className="bold-title">receive your salary, pension, and more</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio itaque recusandae, sed minus culpa quasi cum nihil dignissimos minima iure expedita amet odit eligendi veritatis delectus similique ab, iste rerum.</p>

                    <p className="bold-title">Spend in local currency with your card</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit cumque illo molestiae voluptates amet molestias debitis praesentium officiis id, ad nisi! Voluptatum autem minima dignissimos adipisci distinctio iure illo.</p>

                    <p className="bold-title">Move your money between countries</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit cumque illo molestiae voluptates amet molestias debitis praesentium officiis id, ad nisi! Voluptatum autem minima dignissimos adipisci distinctio iure illo.</p>



                </div>
            </section>
                        <section className='pic-text-section'> 
                <div className='text-container'>
                    <p className="headline">Receive the money from around the world</p>

                    <p className="bold-title">get paid like a local</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio itaque recusandae, sed minus culpa quasi cum nihil dignissimos minima iure expedita amet odit eligendi veritatis delectus similique ab, iste rerum.</p>

                    <p className="bold-title">Work anywhere and link your account to Amazon, Paypal and more</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit cumque illo molestiae voluptates amet molestias debitis praesentium officiis id, ad nisi! Voluptatum autem minima dignissimos adipisci distinctio iure illo.</p>

                    <p className="bold-title">Convet your money in seconds</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit cumque illo molestiae voluptates amet molestias debitis praesentium officiis id, ad nisi! Voluptatum autem minima dignissimos adipisci distinctio iure illo.</p>
                </div>

                <img src="/online-shopping.jpg" alt="" />
            </section>
                         <section className='pic-text-section'> 
                <div className='text-container'>
                    <p className="headline">Shopping through overseas online stores</p>

                    <p className="bold-title">Pay at the real exchange rate</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio itaque recusandae, sed minus culpa quasi cum nihil dignissimos minima iure expedita amet odit eligendi veritatis delectus similique ab, iste rerum.</p>

                    <p className="bold-title">Always pay in the local currency</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit cumque illo molestiae voluptates amet molestias debitis praesentium officiis id, ad nisi! Voluptatum autem minima dignissimos adipisci distinctio iure illo.</p>

                    <p className="bold-title">Pay online securely with instant notifications</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit cumque illo molestiae voluptates amet molestias debitis praesentium officiis id, ad nisi! Voluptatum autem minima dignissimos adipisci distinctio iure illo.</p>
                </div>

                <img src="/banking.jpg" alt="" />
            </section>
            <section className='pic-text-section'> 
                <img src="/room.jpg" alt="" />
                <div className='text-container'>
                    <p className="headline">Take the stress out of managing property</p>

                    <p className="bold-title">Save when you buy property abroad</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio itaque recusandae, sed minus culpa quasi cum nihil dignissimos minima iure expedita amet odit eligendi veritatis delectus similique ab, iste rerum.</p>

                    <p className="bold-title">Pay your bills remotely</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit cumque illo molestiae voluptates amet molestias debitis praesentium officiis id, ad nisi! Voluptatum autem minima dignissimos adipisci distinctio iure illo.</p>

                    <p className="bold-title">Receive payments from tenants</p>
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, velit cumque illo molestiae voluptates amet molestias debitis praesentium officiis id, ad nisi! Voluptatum autem minima dignissimos adipisci distinctio iure illo.</p>



                </div>
            </section>
            <section className='getting-started'>
                <div className="gs-txt-box">
                    <p>Getting Started</p>
                    <h2>Get set up and start  spending with your card in minutes</h2>
                </div>
                <div className="gs-steps">
                    <div>
                        <h3 className='title'>Register in minutes</h3>
                        <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa doloribus magni ipsum iusto rerum autem perspiciatis cumque quam ratione!</p>
                    </div>
                    <div>
                        <h3 className='title'>Verify your identity</h3>
                        <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus a sequi omnis placeat eaque similique dolorem ipsam sed quas!</p>
                    </div>
                    <div>
                        <h3 className='title'>Top up your account</h3>
                        <p className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, architecto. Sit magnam quo incidunt eaque quas aliquid nemo animi itaque!</p>
                    </div>
                    <div> <CheckCircleOutlineIcon sx={{fontSize:70}} />
                    <p className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, mollitia.</p>
                     </div>

                </div>
                <a className="gs-redirect" href="http://" target="_blank" rel="noopener noreferrer">Get started</a>
            </section>
       </main>

    );
};

export default Main;