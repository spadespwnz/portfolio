import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import ImageText from "../components/ImageText"
import Img from "gatsby-image"
import {graphql} from "gatsby"
export default ({data}) => (

    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="Spades Tools for SA2B">
            Realtime Game Mod
            <p css={{marginBlockEnd:`0`}}>Github:</p>

            <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/spades-tools">Tools</a>
            </span>
            <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/race-server/tree/master/src/app">Race Server</a>
            </span>
            <p>
                Go, SQLite, Socket Server, NodejS (Express), mongoDB
            </p>
        </Sidebar>


        <Project>
            <Img fluid={data.banner.childImageSharp.fluid} />
            <p>
            SPaDeS Tools is a set of tools for modifying the game Sonic Adventure 2: Battle, on PC. It is built upon the fact that it is easy to both read information 
            about the players location and physics data, and that it is possible to create a clone of the game character and inject properties into it. Using these 2 main principles,
            and a bit of cleverness, it was possible to add some interesting functionality to the game.
            </p>
            <ImageText fluid={data.pic1.childImageSharp.fluid} mirror={true}>
                The tool is controlled through this window. This application has very specialized uses, and a narrow audience, so the user interface was 
                not the focus of this project.
            </ImageText>
            <p>
                The first tool, called <b>Save Engine</b>, and main purpose of this program, is the ability to save the game characters location and physics information instantly with the press of a button, and instantly 
                reload back to that position with another button. This gives the player the power to repeatedly practice short sections of the game without needing to replay the entire level, 
                or backtrack through the level. This method also saves and loads the game time, so players can test different strategies to find which method is faster. Up to 10 different locations 
                can be saved at once, and players can switch between which slot is currently being used for saving and loading; the in-game score display is used to tell the user which slot is currently 
                selected.
            </p>
            <p>
                The second tool, called <b>Ghost Mod</b>, allows the user to record an entire play-through of a stage. When enabled, if the player completes a stage faster than previously it will 
                automatically store the new data. This allows the user to easily keep a record of their fastest play-throughs of each stage. The player can also race against their fastest time, and this 
                will create a clone of that play-through in the game, and allow the player to see it while playing the stage.
            </p>
            <ImageText imgUrl="/vid/spadestools/vid1.webm" video={true} mirror={true}>
                The player race's against his own fastest time through a level, and if he can win, the ghost data will be updated with this new fastest time.
            </ImageText>
            <p>
                Another feature of the Ghost Mod is the ability for players to upload their data online, and share it to other users. Other players can then download 
                these Ghost replays and race against them. This is made easy by a webserver that the tool can upload this data directly to, and players can download Ghost Data directly through 
                the tool.
            </p>
            <p>
                The Ghost Mod has 2 more main features, firstly it has a mode specifically designed for recording play-throughs of the entire game, instead of just a single level. Using this 
                option will allow a player to race against his own Ghost for an entire play-through of the game. This data is also easily uploaded and downloaded through the tool so that 
                others can race against each others Ghosts. The Ghost mode also has a feature called Replay Mode, which instead of racing against the Ghost Data, it will let you watch the 
                Ghost play through the level. This allows the player to easily see exactly what other players are doing, or examine their own play for mistakes.
            </p>
            <p>
                The next and most exciting tool is the <b>Race Mode</b>. This tool allows multiple players to race against each other, and shows them in each others game. One player 
                must run the server, then all players must connect to this server, and into a specific race room. 
            </p>
            <ImageText imgUrl="/vid/spadestools1.webm" video={true} mirror={true}>
                Once the players have joined the server together, they will be able to see each other in their game.
            </ImageText>
            <p>
                This functionality is achieved by each player's game creating a clone of itself for each other player in the server, then injecting the other players 
                location and physics data into this clone. The players data is read each frame and passed to the server via a socket, then passed directly to the other clients.
                This does not allow players to interact with objects from another players game, but simple shows their location.
            </p>
            <p>
                The last tool is the <b>Rewinder</b>. This gives the players the ability to rewind, frame by frame, through the level. They can continue playing from any frame they choose. 
                While rewinding through the level, copies of the game character are created on the path they took, which acts as a visualization of the play-through that they can traverse through.
            </p>
            <ImageText imgUrl="/vid/spadestools/vid2.webm" video={true} mirror={false}>
                The rewinder can be used freely as many times as wanted, and it correctly sets the game time so it can be used to test specific timings.
            </ImageText>
            <p>
                This tool is complicated and has many parts and intricacies, so if you are interested to learn more, you can watch the video below:
            </p>
            <div css={{height:`0`,width:`100%`,paddingBottom:`56.25%`, position:`relative`}}>
                <iframe title="Youtube Explanation" css={{width:`100%`,height:`100%`, position:`absolute`,left:`0`,top:`0`}} width="560" height="315" src="https://www.youtube.com/embed/YOpwgr6HTC4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
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
  },
  pic1: file(relativePath: { eq: "spadestools/1.png" }) {
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
