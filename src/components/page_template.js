import React from "react"
import Banner from "../components/banner"
import Content from '../components/page_content'
import External from '../components/external_links_section'
import Footer from "../components/footer"

export default (props) => (
    <div>
        <Banner />
        <Content >
            {props.children}
        </Content>
        <External />
        <Footer />
    </div>
)