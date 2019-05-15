import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import ImageText from "../components/ImageText"
import { Link } from "gatsby"
export default () => (
    <div>
        <PageTemplate sidebar={true} width="1000px">
            <Sidebar title="PicHunt">
                Mobile App

                <p css={{marginBlockEnd:`0`}}>Github:</p>

                <span css={{display:`block`}}>
                <a href="https://github.com/spadespwnz/Pichunt-App">App</a>
                </span>
                <span css={{display:`block`}}>
                <a href="https://github.com/spadespwnz/Pichunt">Server</a>
                </span>

                <p>
                    Node, Express, mongoDB, Amazon S3, Java
                </p>
            </Sidebar>
            <Project>
            
            <img css={{width:`100%`}}></img>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

            </Project>
        </PageTemplate>

    </div>
)