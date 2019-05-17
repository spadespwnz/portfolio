import React from "react"
import { navigate} from "gatsby"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby"
export default () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
    return (
        <div style={{display: `flex`, alignItems: `left`, float: `left`, height:`100%`, marginRight: `-1000px`}}>
            <div style={{display: `flex`, justifyContent:`center`, alignItems:`center`, height:`100%`, margin:`0`, padding:`0`, textAlign:`center`,
            }}
            css={{
                ':hover': {
                    //textDecoration: `underline`,
                    //backgroundColor: `black`, 
                    cursor:`pointer`,
                    transitionDuration: `0.5s`,
                    color: `rgb(255, 132, 132)`,
                    opacity: `1`,
                    
                },
                fontSize:`30px`,
                color:`black`,
                transitionDuration: `0.5s`,
                opacity: `.5`,
                "@media all and (max-height: 700px)":{fontSize:`1em`},                
            }}
            onClick = { event => {
                event.preventDefault()
                navigate("/")
            }}
            >
            <div css={{marginRight: `10px`,
                width:`100%`,
                height: `80%`,
                 transitionDuration: `2s`,
                 borderRadius: `50%`, overflow:`hidden`}} >
                 <Img fluid={data.file.childImageSharp.fluid} />
                
            </div>
            Nathan Brown
            </div>
        </div>
    )
}
