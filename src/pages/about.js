import React, { Component } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

class PageContact extends Component {
    render() {
        return (
            <Layout>
                <SEO title="О центре" />
                <section className="slide slide-center animated">
                    <div className="slide__content">
                        <div className="slide__copy typography">
                            <h2>О центре</h2>
                            <hr className="hr-gradient" />
                            <p>                                The world knows that our kids need to be safe, and PikMyKid is here to provide that
                                safety. Some of the national syndicates have taken note. PikMyKid has been featured in a
                                plethora of different publications advocating for such safety.</p>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default PageContact;
