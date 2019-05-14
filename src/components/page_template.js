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
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
        </Helmet>
        <Banner />
        <Content >
            {props.children}
        </Content>
        <External />
        <Footer />
    </div>
)
    }