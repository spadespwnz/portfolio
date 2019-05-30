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
        <Sidebar title="WebApp Experiments">
            Various WebApps for learning purposes
            <p>
                <a className={styles.sidebar_page_link} href="http://www.spades.cloud">Authentication</a>
                <a className={styles.sidebar_page_link} href="http://www.spades.cloud/lists">Group Lists</a>
                <a className={styles.sidebar_page_link} href="http://www.spades.cloud/notes">Notes</a>
                <a className={styles.sidebar_page_link} href="http://www.spades.cloud/upload">Image Uploading</a>
                <a className={styles.sidebar_page_link} href="http://www.spades.cloud/friends">Friends and Chat</a>
            </p>
            <p css={{marginBlockEnd:`0`}}>Github:</p>

            <span css={{display:`block`}}>
                <a href="https://github.com/spadespwnz/app">Code</a>
            </span>
            <p>
                NodeJS, CSS, Javascript, mongoDB, Heroku, Bootstrap, JWT, 
                AWS S3, WebSockets
            </p>
        </Sidebar>
        <Project>
            <Img fluid={data.banner.childImageSharp.fluid} />
            <p>
                This website was created as I experimented to design different types of WebApps and features. The main purpose of these was to work on server side coding, 
                and as a result the User Interface is very lackluster.
            </p>
            <p>
                The main features created for this include a <i>Login and Authentication</i> system, A tool for <i>group lists</i>, a simple <i>note taking</i> page, <i>image uploading/sharing</i>, 
                and a friends system with <i>real-time chatting</i>.
            </p>
            
            <p>
             <b css={{display:`block`, opacity:`.5`}}>Login and Authentication:</b> 
                The Authentication is handled using a JWT (JSON Web Token). When a user logs in, or creates an account, the server creates a JWT string their user information, and sends it to them. 
                This token is saved as a cookie, as well as passed back in a JSON object, and the server checks for this token on all protected routes. The passwords are stored as as a SHA512 hash after 
                being salted, and the password itself is never saved directly by the server. 
            </p>
            <p>
                <b css={{display:`block`, opacity:`.5`}}>Group Lists:</b> 
                Group Lists are a type of list that has multiple contributors. The creator and owner of the list enables other users to access the list. All users 
                with access are able to add new items to the list, and approve or unapprove items.
                <ImageText fluid={data.img1.childImageSharp.fluid}  mirror={true}>
                    When accessing the list, it can be filtered by only showing items that have been approved by selected users. This makes it simple to find, for example, all 
                    the items approved by a few specific people.
                </ImageText>
                Within each item is a number showing how many people have approved that item, and hovering over will show which users have approved it.
            </p>
            <p>
                <b css={{display:`block`, opacity:`.5`}}>Notes:</b> 
                The notes page is a simple WebApp giving users the ability to create and write notes. These notes are automatically stored on the server, and regularly saved 
                to the server as they are updated. They can only be accessed by the user that created them.
            </p>
            <p>
                <b css={{display:`block`, opacity:`.5`}}>Image Uploading and Sharing:</b> 
                <div css={{width:`100%`, textAlign:`center`, marginTop:`10px`, marginBottom:`10px`}}>
                    <video css={{maxWidth:`80%`, marginLeft:`10%`, marginRight:`10%`}} src="/vid/webtools/upload.webm" muted autoPlay="autoplay" loop></video>
                    <span css={{fontSize:`.75em`, opacity:`.5`}}>Take a screenshot, paste it in, crop, upload, and share!</span>
                </div>
                The image uploading tool is designed to make it quick and easy to share pictures. Simply paste a picture into the window, and it will be added to the canvas. 
                From there the image can be modified by cropping, rotation, or drawing boxes. Once editing is finished the image can be uploaded with a press of a button, and will instantly 
                allow you to copy the URL of the uploaded image. The uploading tool will also make use of WebStorage if the upload fails, and allow you to upload the images from storage 
                once you connected. When these images are uploaded they are added to the user's gallery, which can be accessed by anyone.
            </p>
            <p>
                These images are stored on Amazon's S3 storage service, which allows exceedingly fast load times.
            </p>
            <p>
                <b css={{display:`block`, opacity:`.5`}}>Friends and Chat:</b> 
                <ImageText fluid={data.friends1.childImageSharp.fluid}  mirror={true}>
                    The friends system works by sending friend requests to other users. The other user can then accept or decline the request.
                </ImageText>
                Once users have become friends they will see each other in the friends list, as well as see an indicator showing if they are currently online. 
                From the friends list, users can send messages which will 
                be shown to the other users as a flashing window that can be maximized. Using this window the users can chat in real time. The chat window can be minimized, and will begin 
                flashing again if there are any new unread messages.
            </p>
            <div css={{width:`100%`, textAlign:`center`, marginTop:`10px`, marginBottom:`10px`}}>
                <video css={{maxWidth:`80%`, marginLeft:`10%`, marginRight:`10%`}} src="/vid/webtools/chat2.webm" muted autoPlay="autoplay" loop></video>
            </div>
            <p>
                This chatting system is powered through WebSockets. Along with the chat windows and friends list that is accessible on all authenticated routes, there is a friends page 
                which allows viewing of all messages sent between the 2 users. These messages are stored in a mongoDB database as they as sent through the WebSockets. Chatting is also 
                possible on this friends page using the conversation history window.
            </p>
        </Project>
    </PageTemplate>
)
export const query = graphql`
  query {
    banner: file(relativePath: { eq: "webapps/banner.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    img1: file(relativePath: { eq: "webapps/img1.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      friends1: file(relativePath: { eq: "webapps/friends1.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
}`