import React, {Component} from 'react';
import classNames from 'classnames';
import { Link } from "gatsby"

import * as styles from '../css/header.module.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <header className={styles.mainHeader}>
                <nav className={styles.mainMenu}>
                    <Link className={styles.mainMenuLogo}  to="/" />
                    <ul>
                        <li><Link to="/about/">О центре</Link></li>
                        <li><Link to="/teachers/">Преподаватели</Link></li>
                        <li><Link to="/material/">Методические материалы</Link></li>
                        <li><Link to="/contact/">Контакты</Link></li>
                    </ul>
                </nav>
                <nav className={this.state.isToggleOn ? styles.mobileMenu : classNames(styles.mobileMenu, styles.opened)}>
                    <div className={styles.inner}>
                        <ul className={styles.mobileMenuMain}>
                            <li><Link to="/about/">О центре</Link></li>
                            <li><Link to="/teachers/">Преподаватели</Link></li>
                            <li><Link to="/materials/">Материалы</Link></li>
                            <li><Link to="/contact/">Контакты</Link></li>
                        </ul>
                    </div>
                </nav>
                <button className={this.state.isToggleOn ? styles.mobileMenuToggle : classNames(styles.mobileMenuToggle, styles.active)} type="button" onClick={this.handleClick.bind(this)}>
                    <div className={classNames(styles.bar, styles.bar1)} />
                    <div className={classNames(styles.bar, styles.bar2)} />
                    <div className={classNames(styles.bar, styles.bar3)} />
                </button>
            </header>
        )
    }
}

export default Header;
