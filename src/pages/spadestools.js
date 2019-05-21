import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import ImageText from "../components/ImageText"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {graphql} from "gatsby"
export default ({data}) => (

    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="Spades Tools for SA2B">
            Realtime Game Mod
        </Sidebar>


        <Project>
            <Img fluid={data.banner.childImageSharp.fluid} />
            <p>
            SPaDeS Tools is a set of tools for modifying the game Sonic Adventure 2: Battle, on PC.
            </p>
        </Project>
    </PageTemplate>
)

export const query = graphql`
query {
  banner: file(relativePath: { eq: "spadestools/banner.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`
