import React from "react"
import Banner from "../components/banner"
import Content from '../components/page_content'
import External from '../components/external_links_section'
import Footer from "../components/footer"
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet"
export default (props) => {
    const data = useStaticQuery(
        graphql`
            query{
                site{
                    siteMetadata{
                        title,
                        siteUrl
                    }
                }
            }
        `
    )
    return (
    <div>
        
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="google-site-verification" content="hi6407zDHiOyWtcCAK6CRIRwY2KVlL1oFK1A9tYkZYA" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        </Helmet>
        <Banner />
        <Content sidebar={props.sidebar} width={props.width}>
            {props.children}
        </Content>
        {/*
        <External />
        */}
        <Footer />
    </div>
)
    }