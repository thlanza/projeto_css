import React from 'react';
import './packages.css'
import '../shared.css'
import { Link } from 'react-router-dom'

function Packages() {
  return (
    <div className="App">
       <div class="background"></div>
    <header class="main-header">
        <div>
            <Link className="main-header__brand" to="/">uHost</Link>
        </div>
        <nav class="main-nav">
            <ul class="main-nav__items">
                <li class="main-nav__item">
                    <a href="index.html">Packages</a>
                </li>
                <li class="main-nav__item">
                <Link to="/customers">Customers</Link>
                </li>
                <li class="main-nav__item main-nav__item--cta">
                    <a href="../start-hosting/index.html">Start Hosting</a>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="package" id="plus">
            <a href="#">
                <h1 class="package__title">Our PLUS Plan</h1>
                <h2 class="package__badge">RECOMMENDED</h2>
                <h2 class="package__subtitle">The most popular choice of our customers.</h2>
                <p class="package__info">Benefit from increased storage and faster support to ensure that your mission-critical data and applications
                    are always available!</p>
            </a>
        </section>
        <section class="package" id="free">
            <a href="#">
                <h1 class="package__title">Our FREE Plan</h1>
                <h2 class="package__subtitle">An extremely solid start into our hosting world.</h2>
                <p class="package__info">Get started immediately at zero cost!</p>
            </a>
        </section>
        <div class="clearfix"></div>
        <section class="package" id="premium">
            <a href="#">
                <h1 class="package__title">Our PREMIUM Plan</h1>
                <h2 class="package__subtitle">All your enterprise needs. Instant support, guaranteed uptime. </h2>
                <p class="package__info">The best solution for small to large enterprises. Because hosting shouldn't be in the way!</p>
            </a>
        </section>
    </main>
    <footer class="main-footer">
        <nav>
            <ul class="main-footer__links">
                <li class="main-footer__link">
                    <a href="#">Support</a>
                </li>
                <li class="main-footer__link">
                    <a href="#">Terms of Use</a>
                </li>
            </ul>
        </nav>
    </footer>
    </div>
  );
}

export default Packages;
