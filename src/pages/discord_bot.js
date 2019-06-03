import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import ImageText from "../components/ImageText"
export default ({data}) => (
    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="Discord Chat Condenser">
            Discord Bot
            <p css={{marginBlockEnd:`0`}}>Github:</p>

            <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/disco-spades/blob/master/main.go">Discord Bot Code</a>
            </span>
            <p>
                Go, Chatbot
            </p>
        </Sidebar>
        <Project>
            <p>
                This is a simple Chatbot for the chat application Discord. The function is to take a series of 5 consecutive sentences and try to generate a sentence that 
                summarizes them. It makes use of a library that applies the TextRank algorithm to the 5 sentences, and then forms a sentence from the top 10 ranked words and 
                outputs that to chat.
            </p>
            <ImageText fluid={data.img1.childImageSharp.fluid} mirror={false}>
                The TextRank algorithm ranks words by how often they appear, and how often the words around them appear. Using such a small sample size of text, the result is 
                mostly meaningless.
            </ImageText>
            <p>
                The purpose of this small project was to just play around with discord API, and this is simply for fun.
            </p>
        </Project>
    </PageTemplate>
)
export const query = graphql`
  query {
    img1: file(relativePath: { eq: "discord/img1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
}`