import React, {Component} from 'react';
import classNames from 'classnames';

import Header from "./header"
import Footer from "./footer";

import * as styles from '../css/layout.module.css'

class Layout extends Component {

    render() {
        return (
            <div>
                <div className={styles.introGradient} />

                <Header />

                <section className={classNames(styles.homeHero, styles.hero, styles.animated)}>
                    <div className={styles.homeHeroFullImg} />animated
                    <div className={styles.homeHeroContent}>
                        <h1 className={styles.homeHeroHeading}>
                            <span className={styles.homeHeroSubHeading}>Центр репетиторов</span>
                            <span className={styles.homeHeroMainHeading}>КЛЯКСА</span>
                        </h1>
                    </div>
                </section>

                <div className={styles.introGradient} />

                <div className={styles.siteContent}>
                    <main>
                        <div className={styles.slideGroup}>
                            <section className={classNames(styles.slide, styles.slideHalf, styles.slideVanilla)}>
                                <div className={styles.slideContent}>
                                    {this.props.children}
                                </div>
                            </section>
                        </div>
                    </main>

                    <div className={styles.introGradient} />
                    <Footer />
                </div>

            </div>
        )
    }
}

Layout.defaultProps = {children: <h1>Заголовок h1 по умолчанию</h1>};

export default Layout;
