import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* <div className="footer__menu-list">
                    <nav className="menu-list">
                        <div className="menu-list__title">Company</div>
                        <ul className="menu-list__content">
                            <li className="footer__menu-link">About Us</li>
                            <li className="footer__menu-link">Contacts</li>
                        </ul>
                    </nav>
                    <nav className="menu-list">
                        <div className="menu-list__title">Buyer</div>
                        <ul className="menu-list__content">
                            <li className="footer__menu-link">Promotions</li>
                            <li className="footer__menu-link">Return items</li>
                            <li className="footer__menu-link">Promo codes</li>
                        </ul>
                    </nav>
                </div> */}
                <div className="footer__info">
                    <div className="footer__copyright">
                        <p>
                            2022-2023 © eMarketX — graduation project
                            &quot;online store&quot;.
                        </p>
                        <p>All rights reserved.</p>
                        <a
                            href="https://github.com/NakhimoVV"
                            target="_blank"
                            rel="noreferrer"
                        >
                            by NakhimoVV
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
