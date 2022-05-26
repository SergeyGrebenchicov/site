import React, { Component } from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"


export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;


const IndexPage = ({data}) => {
    return (
        <Layout>
            <SEO title="Главная страница" />
            <section className="slide slide-center animated">
                <div className="slide__content">
                    <div className="slide__copy typography">
                        <h2>Главная страница - {data.site.siteMetadata.title}</h2>
                        <hr className="hr-gradient" />
                        <p>The world knows that our kids need to be safe, and PikMyKid is here to provide that
                            safety. Some of the national syndicates have taken note. PikMyKid has been featured in a
                            plethora of different publications advocating for such safety.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default IndexPage;