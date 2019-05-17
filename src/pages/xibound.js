import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import ImageText from "../components/ImageText"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {graphql} from "gatsby"
export default ({data}) => (
    <div>
        <PageTemplate sidebar={true} width="1000px">
            <Sidebar title="xi:Bound">
                Android Game
                <p>
                <a href="https://play.google.com/store/apps/details?id=cloud.shovelware.androidtest" css={{marginTop: `50px`}}>App Store</a>
                </p>
                <p>
                    Unity, C#
                </p>
            </Sidebar>
            <Project>
                
                {
                //<img src="/img/xi-full.webp" css={{width:`100%`}}></img>
                }
                <Img fluid={data.xiFull.childImageSharp.fluid}/>
                <p>
                    <a href="https://play.google.com/store/apps/details?id=cloud.shovelware.androidtest">xi:Bound</a> is the first mobile game that I created.
                    The goal is simply to move the ball across each stage,
                    with the only control being tapping to move. The game was designed to be extremely easy to play, yet difficult to beat.
                    Each stage has a series of explosions, creating a pattern that the player must weave the ball through to complete the level.
                </p>

                <ImageText imgUrl="/vid/xibound/builder.webm" video={true} mirror={true}>
                    To create the 100 levels, I developed a <Link to="/builder/">level builder</Link> using <a href="https://github.com/spadespwnz/xiBound-Level-Creator/blob/master/builder.html">HTML and javascript</a>.
                </ImageText>


                <ImageText imgUrl="/vid/xi1.webm" video={true}>
                    The player needs to solve each level by understanding the puzzle and finding a path through.
                </ImageText>
                <p>
                    This game was created using Unity, with the scripts written using C#. The movement is handled by creating a tree of nodes, with each block containing 25 nodes.
                    Upon tapping, the closest node on the tapped block is found, and an A* algorithm determines the shortest path from the node the ball is on to the node tapped on.
                    The player dies if the ball is on a block as the explosion is triggered or the block starts rotating.
                </p>

            </Project>
        </PageTemplate>

    </div>
)

export const query = graphql`
  query {
    xiFull: file(relativePath: { eq: "xi-full.jpeg" }) {
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