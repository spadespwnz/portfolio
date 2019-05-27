import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import ImageText from "../components/ImageText"
export default ({data}) => (
    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="Stream Page and Chatbot">
            Personal Stream Page and Chatbot
            <p css={{marginBlockEnd:`0`}}>Pages:</p>
            <span css={{display:`block`}}>
                <a href="http://www.spades.cloud/stream/gameslist">Games List</a>
            </span>
            <span css={{display:`block`}}>
                <a href="http://www.spades.cloud/stream/gameslist">Mario Maker Levels</a>
            </span>

            <p css={{marginBlockEnd:`0`}}>Github:</p>

            <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/app/blob/master/bot.js">Chat Bot Code</a>
            </span>
            <p>
                NodeJS, CSS, Javascript, mongoDB, Heroku
            </p>
        </Sidebar>
        <Project>
            <a href="http://www.spades.cloud/stream/smm">
                <Img fluid={data.banner.childImageSharp.fluid}></Img>
            </a>
            <p>
                These are a few webpages built in relation to my livestream on Twitch. Their purpose it to provide some extra interaction for viewers that shows 
            some of the game progress that has occurred on the stream. The first page is a games list, which shows games that were intended to be played on stream, with some other related 
            information. This list needs to be manually updated through an admin control panel, only accessible by me.
            </p>

            <p>
                The second page is the mario maker levels page. The content for this page is created by entirely through users typing in the chatroom of my Twitch channel. Through interacting 
                with my personal chatbot, users are able to add mario maker levels to my queue, and from there I can update the queue through the bot. The way this works is by users 
                submitting their level code, in the format XXXX-XXXX-XXXX-XXXX, and the bot can pull specific information about this level by accessing Nintendo's Mario Maker website.
            </p>
                <ImageText fluid={data.queue.childImageSharp.fluid} mirror={true}>
                Once the level codes are verified and the data is obtained, the bot pushes these levels into the database that the page loads the levels from. On this page users are 
                able to see which levels I have played, and where their levels are in the queue.
                </ImageText>
            <p>
                The chatbot connecting the Webpages to the Stream has many other basic and more unique features. Along with all the Mario Maker functions such as adding levels, checking 
                if a level is in the queue, and allowing me to the bot which levels I have completed, it also has a points system where chatters are awarded points which they can spend on actions.
            </p>
            <ImageText fluid={data.points.childImageSharp.fluid} mirror={true}>
                Viewers are given points every twenty minutes, and can use these points to do things like gamble, or suggest stream ideas, or even add their Mario Maker levels to 
                a priority queue. The points can be seen <a href="http://www.spades.cloud/stream/points">here</a>
            </ImageText>
            <p>
                The other 2 main features are the ability to request songs, and a custom trivia-bot. The song request works by connecting to a custom overlay page through websockets, and 
                sending the overlay a link to the song on youtube, after verifying that its a valid link. The trivia bot has a list of questions, organized into categories, and asks 
                questions from selected categories. The first person in chat to write in the correct answer is awarded points.
            </p>
            <ImageText fluid={data.trivia.childImageSharp.fluid} mirror={false}>
                Viewers can participate in the trivia game in chat, controlled through the chatbot.
            </ImageText>
        </Project>
    </PageTemplate>
)
export const query = graphql`
  query {
    banner: file(relativePath: { eq: "stream/banner.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    points: file(relativePath: { eq: "stream/points.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      queue: file(relativePath: { eq: "stream/queue.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      trivia: file(relativePath: { eq: "stream/trivia.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
}`