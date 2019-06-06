import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import ImageText from "../components/ImageText"
export default ({data}) => (
    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="Unity Game">
            Work in progress
            <p>
                C#, Unity
            </p>
        </Sidebar>
        <Project>
            <Img fluid={data.banner.childImageSharp.fluid}></Img>
            <h2 css={{textAlign: `center`, opacity:`.5`}}>
                Under Development
            </h2>
            <p>
            This is a Top-Down shooter currently being developed using the Unity Game Engine. The game will make use of ideas from a range of genres including 
            roguelike's, Shoot 'em Up's and more.
            </p>
            <p>
                The goal of the game is to search room by room looking for upgrades, secrets, or a path to the next level. The layout is randomly generated every time you play, 
                giving you a new experience each time.
            </p>
            <p>
                Each floor has as boss which makes use of more complicated bullet patterns, and must be defeated before moving on to the next level.
                There will be a variety of different enemies with their own movement patterns and bullet patterns. To succeed you must learn to efficiently deal with 
                all the combinations of enemies.
            </p>
            <div css={{width:`100%`, textAlign:`center`, marginTop:`10px`, marginBottom:`10px`}}>
                <video css={{maxWidth:`80%`, marginLeft:`10%`, marginRight:`10%`}} src="/vid/unity_game/gameplay.webm" muted autoPlay="autoplay" loop></video>
            </div>
        </Project>
    </PageTemplate>
)
export const query = graphql`
  query {
    banner: file(relativePath: { eq: "shooter/banner.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    room: file(relativePath: { eq: "shooter/room.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },

}`