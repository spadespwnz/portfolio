import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import ImageText from "../components/ImageText"
import styles from "../styles/webapps.module.css"
export default ({data}) => (
    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="Study Notifications">
        Android App
        <p css={{marginBlockEnd:`0`}}>Github:</p>

        <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/gomain3">Server Code</a>
        </span>
        <p>
            Go, C#, Android SDK, mongoDB, Heroku
        </p>
        </Sidebar>
        <Project>
        <Img fluid={data.ss1.childImageSharp.fluid} />
        <p>
            This study notifications App is made for personal use to help with memorizing Japanese vocabulary. Every 5 minutes, a random word from the 
            collection of words is chosen and given as a notification. 
        </p>
        <ImageText fluid={data.ss4.childImageSharp.fluid}  mirror={true}>
            There is a simple activity for adding adding new words. This pushes the words to the server where they are added to the word collection database.
        </ImageText>
        <ImageText fluid={data.ss3.childImageSharp.fluid}  mirror={false}>
            There is also a webpage that can be accessed to update the words, and write in the Kanji and Kana writings for the word. The purpose of this page 
            is to access the word list from a a PC, making it easier to write in and look up words using Japanese Characters.
        </ImageText>
        <ImageText fluid={data.ss5.childImageSharp.fluid}  mirror={true}>
            Because I usually happen to look at my phone once every 5 minutes, seeing these notifications adds a little boost in my studying efficiency. This system could 
            easily be modified to work with any type of information that needs to be memorized, and could be an effective study tool in the future.
        </ImageText>
        </Project>
    </PageTemplate>
)

export const query = graphql`
  query {
    ss1: file(relativePath: { eq: "study/ss1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    ss4: file(relativePath: { eq: "study/ss4.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      ss3: file(relativePath: { eq: "study/ss3.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      ss5: file(relativePath: { eq: "study/ss5.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
}`