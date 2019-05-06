import React from "react"
import Banner from "../components/banner"
import Content from '../components/page_content'
import External from '../components/external_links_section'
import Title from "../components/title"
import SkillBlock from "../components/skill_block"
import Image from "../components/image_hover"
export default () => (
        <div >
            <Banner />
            <Content>
                <Title title="ABOUT" />
                <p>
                I'm a software developer that enjoys working on any project, from microcontrollers to mobile applications.
                Having worked on a variety of projects, I've gained experience with many different languages, frameworks and paradigms, and can quickly learn new tools as needed.
                </p>
                <p>
                Currently I reside in Thunder Bay, Ontario, yet am open to relocating for a job opportuniy. I am a full Canadian citizen looking for employement as a developer within Canada.
                </p>
                <Title title="FEATURED" />
                <div css={{textAlign: `center`,display: `block`}}>
                    <Image imgUrl="midi-5.gif">
                        Midi Parser + Arduino Player
                    </Image>
                    <Image imgUrl="spadestools-3.gif">
                        Spades Tools for SA2B
                    </Image>
                    <Image imgUrl="midi-1.jpg">
                        test
                    </Image>
                    <Image imgUrl="midi-1.jpg">
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
                    Always glad to receive positive criticism, I accept that I don't know everything, and can always improve.
                </SkillBlock>
                <p css={{fontSize:`16`}}>Technical Skills: Many popular langauges: Javascript, Node, HTML, CSS, Python, Go, C#, C++, Java. Frameworks such as Express, Flask, React,
                    Bootstrap; Paradigms and Methodoligies: CSS in JS, RESTful APIs, MVC, JWT, OAuth; Databases and In-Memory Database: Mongodb, DynamoDB, SQLite, MariaDB, Redis; Web Technologies such as Web Sockets, Location, Notifications;
                    Developement tools: NPM, webpack, Gatsby, Jenkins, git, DevTools; Cloud Providers: Amazon AWS, Heroku; and Developement Suites: Unity, Android Studio.
                </p>
                <Title title="CONTACT" />
                <Title title="HIRE" />
            </Content>
            <External />
        </div>
    )
