import React from 'react';
import '../shared.css'
import './customers.css'
import { Link } from 'react-router-dom'
import customer1 from '../images/customer-1.jpg'
import customer2 from '../images/customer-2.jpg'

function Customers() {
    return (
    <div>
     <header class="main-header">
        <div>
            <Link className="main-header__brand" to="/">uHost</Link>
        </div>
     <nav class="main-nav">
            <ul class="main-nav__items">    
                <li class="main-nav__item">
                <Link to="/packages">Packages</Link>
                </li>
                <li class="main-nav__item">
                <Link to="/customers">Customers</Link>
                </li>
                <li class="main-nav__item main-nav__item--cta">
                    <a href="start-hosting/index.html">Start Hosting</a>
                </li>
            </ul>
        </nav>
     </header>
 
    <main>
        <div>
            <div class="testimonial" id="customer-1">
                <div class="testimonial__image-container">
                    <img src={customer1} alt="Mike Statham - Customer" class="testimonial__image"></img>
                </div>
                <div class="testimonial__info">
                    <h1 class="testimonial__name">Mike Statham</h1>
                    <h2 class="testimonial__subtitle">Founder of
                        <a href="tech-analysis.com">tech-analysis.com</a>
                    </h2>
                    <p class="testimonial__text">uHost helped me realize my project with a highly constrained budget in like no time.</p>
                </div>
            </div>
            <div class="testimonial" id="customer-2">

                <div class="testimonial__info">
                    <h1 class="testimonial__name">John Mellow</h1>
                    <h2 class="testimonial__subtitle">Hosts his private videos on uHost.
                    </h2>
                    <p class="testimonial__text">I worked as a blogger and always looked for an integrated hosting and file storage solution. I found
                        it in uHost!
                    </p>
                </div>
                <div class="testimonial__image-container">
                    <img src={customer2} alt="John Mellow - Customer" class="testimonial__image"></img>
                </div>
            </div>
        </div>
    </main>
    <footer class="main-footer">
        <nav>
            <ul>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
            </ul>
        </nav>
    </footer>
    </div>
    )
}

export default Customers;

