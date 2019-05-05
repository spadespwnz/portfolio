import React from "react"
import Banner from "../components/banner"
import Content from '../components/page_content'
import External from '../components/external_links_section'
import Title from "../components/title"

export default () => (
        <div>
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
                <Title title="EDUCATION" />
                <p>Bachelor of Computer Science - Lakehead University</p>
                <Title title="SKILLS" />
                <p>Perseverance: I don't shy away from difficult problems, but instead face them head on, eager to learn.</p>
                <p>Versatility: With a wide breadth of knowledge I can always choose the right tool for the job.</p>
                <p>Abstract Thinking: I can visualize how all the systems will interact with eachother, and what each parts role will be.</p>
                <p>Technical Skills: Many popular langauges: Javascript, Node, HTML, CSS, Python, Go, C#, C++, Java. Frameworks such as Express, Flask, React,
                    Bootstrap; Paradigms and Methodoligies: CSS in JS, RESTful APIs, MVC, JWT, OAuth; Databases and In-Memory Database: Mongodb, DynamoDB, SQLite, MariaDB; Web Technologies such as Web Sockets, Location, Notifications;
                    Developement tools: NPM, webpack, Gatsby, Jenkins, git, DevTools; Cloud Providers: Amazon AWS, Heroku; and Developement Suites: Unity, Android Studio.
                </p>
            </Content>
            <External />
        </div>
    )
