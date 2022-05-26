import React, {Component} from 'react';
import { Link } from "gatsby"

import vk from "../images/vk.png"
import ok from "../images/ok.png"
import facebook from "../images/facebook.png"
import youtube from "../images/youtube.png"


import styles from "../css/footer.module.css"

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.footerPrimary}>
                    <div className={styles.inner}>
                        <Link className={styles.footerLogo}  to="/" />
                        <nav className={styles.footerMenu}>
                            <div className={styles.footerMenuBlock}>
                                <h5 className={styles.footerMenuHeading}>Центр</h5>
                                <ul className={styles.footerMenuList}>
                                    <li><Link to="/teachers/">Преподаватели</Link></li>
                                    <li><Link to="/contact/">Контакты</Link></li>
                                    <li><Link to="/about/">О нас</Link></li>
                                </ul>
                            </div>
                            <div className={styles.footerMenuBlock}>
                                <h5 className={styles.footerMenuHeading}>Помощь</h5>
                                <ul className={styles.footerMenuList}>
                                    <li><Link to="/materials/">Материалы</Link></li>
                                </ul>
                            </div>
                            <div className={styles.footerMenuBlock}>
                                <h5 className={styles.footerMenuHeading}>Приложения</h5>
                                <ul className={styles.footerMenuList}>
                                    <li><a href="#">App Store</a></li>
                                    <li><a href="#">Google Play</a></li>
                                </ul>
                            </div>
                            <div className={styles.footerMenuBlock}>
                                <h5 className={styles.footerMenuHeading}>Управление</h5>
                                <ul className={styles.footerMenuList}>
                                    <li><a href="#">Вход</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className={styles.footerCopyright}>
                    <div className={styles.footerCopyrightText}>
                        <div>Клякса © 2020-{new Date().getFullYear()}. ИП Моисеева И.С.</div>
                        <div>Сообщение&nbsp;по&nbsp;адресу:&nbsp;<a href="mailto:moiseevachel@mail.ru">moiseevachel@mail.ru</a></div>
                    </div>
                    <div className={styles.footerSocialMenu}>
                        <a href="https://vk.com/repetitorschel" className={styles.footerSocialMenuLink}>
                            <img src={vk} alt="ВКонтакте" />
                        </a>
                        <a href="https://ok.ru/repetitorschel" className={styles.footerSocialMenuLink}>
                            <img src={ok} alt="Однокласники" />
                        </a>
                        <a href="/" className={styles.footerSocialMenuLink}>
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="/" className={styles.footerSocialMenuLink}>
                            <img src={youtube} alt="YouTube" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;