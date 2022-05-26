import React, { Component } from 'react';
import classNames from 'classnames';

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../css/contact.module.css"

class PageContact extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Контакты" />
                <section className={classNames(styles.slide, styles.slideHalf, styles.animated)}>
                    <div className={styles.slideContent}>
                        <div className={classNames(styles.slideCopy, styles.typography)}>
                            <h2>Контакты</h2>
                            <hr className={styles.hrGradient} />
                            <p>Позвоните к нам или отправьте сообщение, и мы подберем вам репетитора. Центр репетиторов «Клякса»​   —   это секрет вашего успеха</p>
                            <div className={styles.contactBlock} itemType="http://schema.org/ContactPoint">
                                <div className={styles.contactCard}>
                                    <h4 className={styles.contactCardHeading} itemProp="contactType">Центр 1</h4>
                                    <p>ул. Тухачевского, 3 (ДК "Станкомаш"), каб. 314</p>
                                    <div className={styles.contactCardContent}>
                                        <span className={styles.contactCardInfo}>
                                            <a itemProp="email" href="mailto:Sales@Pikmykid.com?Subject=I%20Have%20a%20Sales%20Question">Sales@Pikmykid.com</a>
                                        </span>
                                        <span className="contact-card__info" itemProp="telephone">
                                            <a href="tel:1-813-649-8028">813-649-8028</a>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.contactCard}>
                                    <h4 className={styles.contactCardHeading} itemProp="contactType">Support</h4>
                                    <div className="contact-card__content"><span className="contact-card__info"><a
                                        itemProp="email"
                                        href="mailto:Support@Pikmykid.com?Subject=I%20Have%20a%20Sales%20Question">Support@Pikmykid.com</a></span><span
                                        className="contact-card__info" itemProp="telephone"><a
                                        href="tel:1-813-649-8028">813-649-8028</a></span></div>
                                </div>
                                <div className={styles.contactCard}>
                                    <h4 className={styles.contactCardHeading} itemProp="contactType">Customer Service</h4>
                                    <div className="contact-card__content"><span className="contact-card__info"><a
                                        itemProp="email"
                                        href="mailto:Support@Pikmykid.com?Subject=I%20Have%20a%20Sales%20Question">Support@Pikmykid.com</a></span><span
                                        className="contact-card__info" itemProp="telephone"><a
                                        href="tel:1-813-864-7627">813-864-7627</a></span></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slideHero}>

                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default PageContact;
