import React from "react"
import Title from "../components/title"
import SkillBlock from "../components/skill_block"
import Image from "../components/image_hover"
import PageTemplate from "../components/page_template"
import { Link } from "gatsby"
export default () => (
    <div >
 
        <PageTemplate>
            <Title title="ABOUT" />
            <p>
            I'm a software developer that enjoys working on any project, from microcontrollers to mobile applications.
            Having worked on a variety of projects, I've gained experience with many different languages, frameworks and paradigms, and can quickly learn new tools as needed.
            </p>
            <p>
                Received my <b>Bachelor's of Computer Science</b> from Lakehead University, Thunder Bay, Ontario.
            </p>
            <p>
            Currently I reside in Thunder Bay, Ontario, yet am open to relocating for a job opportuniy. I am a full Canadian citizen looking for employement as a developer within Canada.
            </p>
            
                
            <Title title="RECENT PROJECTS" />
            <div css={{textAlign: `center`,display: `block`}}>

            
                
                <Image imgUrl="midi-1.jpg" hoverUrl="midi-5.gif" url="arduino_midi" >
                    test
                </Image>
                
                <Image imgUrl="spadestools-8.png" hoverUrl="spadestools-3.gif">
                    Spades Tools for SA2B
                </Image>
                <Image imgUrl="xi-1.png" hoverUrl="xi-2.gif">
                    test
                </Image>
                <Image imgUrl="vote-3.png" hoverUrl="vote-2.gif">
                    test
                </Image>

            </div>
            <Title title="SKILLS" />
            <SkillBlock title="Perseverance">
                I don't shy away from difficult problems, but instead face them head on, eager to learn.
            </SkillBlock>
            <SkillBlock title="Versatility">
            With a wide breadth of knowledge I can always choose the right tool for the job.
            </SkillBlock>
            <SkillBlock title="Abstract Thinking">
                Abstract Thinking: I can visualize how all the systems will interact with eachother, and what each parts role will be.
            </SkillBlock>
            <SkillBlock title="Team Player">
                Always glad to receive criticism, I accept that there can always be improvement.
            </SkillBlock>
            <p css={{fontSize:`16`}}><u>Technical Skills:</u> Many popular langauges: Javascript, Node, HTML, CSS, Python, Go, C#, C++, Java. Frameworks such as Express, Flask, React,
                Bootstrap; Paradigms and Methodoligies: CSS in JS, RESTful APIs, MVC, JWT, OAuth; Databases and In-Memory Database: Mongodb, DynamoDB, SQLite, MariaDB, Redis; Web Technologies such as Web Sockets, Location, Notifications;
                Developement tools: NPM, webpack, Gatsby, Jenkins, git, DevTools; Cloud Providers: Amazon AWS, Heroku; and Developement Suites: Unity, Android Studio.
            </p>
            
            
            <Title title="HIRE" />
            <p>
                As a dedicated, knowledgable and systematic software developer, I can help bring any project to life. I would love the opportunity
                to work creating your application, and believe I can fit perfectly into any team. Please don't hesitate to contact me.
            </p>
            <p>
                <a href="mailto:NathanBrownDev@gmail.com" css={{textDecoration: `underline`, color: `rgb(255, 132, 132)`}}>NathanBrownDev@gmail.com</a>
            </p>
            <Link to="/resume.pdf">Resume</Link>
        </PageTemplate>
    </div>
)
