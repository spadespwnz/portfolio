import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import ImageText from "../components/ImageText"
import Img from "gatsby-image"
import {graphql} from "gatsby"
export default ({data}) => (
    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="Twitch Vote Overlay">
            Overlay for live streaming on twitch
            <p>
            <a href="http://vote.spades.cloud/spadesbot/dashboard">WebApp</a>
            </p>
            <p css={{marginBlockEnd:`0`}}>Github:</p>

            <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/shovelware">Project Code</a>
            </span>
            
            <p>
                NodeJS, Express, mongoDB, WebSockets,
                OAuth, chatbot, sessions
            </p>
        </Sidebar>
        
        <Project>
            <Img fluid={data.logo.childImageSharp.fluid}></Img>
            <p>
                This WebApp is used to create an overlay to handle realtime voting from Twitch chat rooms. The streamer simply authenticates with Twitch through the website, and is given an 
                Overlay URL. They can browse to this URL, or add it as a source in any modern broadcasting software. The overlay is then controlled through the chat room on their channel. Using 
                simple commands, the host can start and end polls, with !poll x,y,z and !endpoll respectively; the other people in the chat can vote using !vote [#].
            </p>
            <div css={{width:`100%`, textAlign:`center`}}>
            <video css={{maxWidth:`80%`}} src="/vid/vote1.webm" muted autoplay="autoplay" loop></video>
            </div>
            <p>
                To see this in action, first head over to <a href="https://www.twitch.tv/">Twitch</a> and sign up for an account. Once you have an account, go to 
                the <a href="http://vote.spades.cloud/spadesbot/dashboard">Overlay App</a> and authenticate the App with your Twitch account. You will be redirected to the dashboard, which 
                will provide you with a link to the Overlay URL. Copy this link and open it in a new window, it should start as a blank page. Now, in another window, navigate to your twitch 
                channel page, located at http://www.twitch.tv/<b>[YOUR_ACCOUNT_NAME]</b>. Once there, you can start a new poll by typing in chat: !poll <i>option1,option2,option3</i>. 
                Now as anyone votes by typing <i>!vote #</i>, such as !vote 1, the poll will update in real time. As more people vote the poll will continue to be updated, and once finished you can 
                end the poll using the command <i>!endpoll</i>.
            </p>
            <p>
                When being used with streaming, the streamer will add the Overlay URL to their broadcasting software and simply have the polls appear on their stream, 
                instead of using a page in the browser.
            </p>
            <ImageText fluid={data.diagram1.childImageSharp.fluid} mirror={true}>
                A record of all your previous poll results is kept, and can be accessed <a href="http://vote.spades.cloud/spadesbot/dashboard/polls">Here</a> after authenticating with the WebApp.
            </ImageText>
            <p>
                The Overlay Application is made up of a few key parts interacting with each other. The website is powered by NodeJS, running an Express Server. The other key component is 
                a twitch chat bot that listens to users channel's. When a user authenticates the site to their Twitch account, their username is added to a mongoDB database, and the twitch 
                chat bot joins their chat channel and starts listening. The user is given an overlay URL, and this URL contains the code of channel used to communicate with the bot.
            </p>
            <p css={{width:`100%`, textAlign:`center`, fontSize:`.75em`}}>
                http://vote.spades.cloud/spadesbot/source/<b>5ce5d87bc30aa90017a9055e</b>
            </p>
            <p>
                When the user goes to the provided URL, it forms a WebSocket connection to the server on a channel determined by the code in the URL. The bot has access to each user's Overlay code, and uses this 
                to send poll information through the socket. The authentication information is stored using sessions, but the overlay page itself is not locked behind authentication, as information 
                only flows from the bot to the page, and each users overlay page is accessed by a specific code in the URL. If the user loses their Overlay URL, they will need to reauthenticate to 
                find it again, or to generate a new URL.
            </p>
        </Project>
    </PageTemplate>
)
export const query = graphql`
  query {
    diagram1: file(relativePath: { eq: "overlay/1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    logo: file(relativePath: { eq: "overlay/logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
}
`