import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import ImageText from "../components/ImageText"
import { Link } from "gatsby"
export default () => (
    <div>
        <PageTemplate sidebar={true} width="1000px">
            <Sidebar title="PicHunt">
                Mobile App

                <p css={{marginBlockEnd:`0`}}>Github:</p>

                <span css={{display:`block`}}>
                <a href="https://github.com/spadespwnz/Pichunt-App">App</a>
                </span>
                <span css={{display:`block`}}>
                <a href="https://github.com/spadespwnz/Pichunt">Server</a>
                </span>

                <p>
                    Node, Express, mongoDB, AWS S3 and Lambda, Java
                </p>
            </Sidebar>
            <Project>
            
            <img css={{width:`100%`}} src="/img/pichunt_logo2.png"></img>
            <h2 css={{textAlign: `center`, opacity:`.5`}}>
                Under Developement
            </h2>
            <p>
                PicHunt is a recreational mobile app for Android Devices. Create hunts for other people to search for by taking a picture of an interesting location.
                Other people will see the picture and try to find the location. Once the place the picture was taken has been found, it can be "Collected", and added to the list
                of completed Hunts.
            </p>
            <p>
                When pictures are uploaded, they are added to an AWS S3 bucket that has an attached Lambda function to create a thumbnail; and when pictures are loaded they are cached
                onto the device. This minimizes the amount of data consumed while using the app.
            </p>
            <ImageText imgUrl="/img/pichunt/gif2.gif" mirror={true}>
                   Adding a picture is as simple as selecting the new picture icon from the gallery page, taking a picture, and uploading it.
                   This instantly adds it to the users picture gallery, and it will start appearing for other users searching for Hunts. 
                   <p>
                   <i css={{fontSize:`.5em`}}>This GIF is highly compressed to lower data usage.</i>
                   </p>
            </ImageText>
            <ImageText imgUrl="/img/pichunt/gif1.gif" mirror={false}>
                When accessing the Hunts tab, all nearby hunts, within 5km, will be listed. Once the user is within 20 meters from where the picture was taken,
                the user is able to "Collect" it. This moves the hunt to the Collected tab of the gallery. The specific design is just implemented for testing, as this 
                a work in progress.
                <p>
                   <i css={{fontSize:`.5em`}}>This GIF is highly compressed to lower data usage.</i>
                   </p>
            </ImageText>
            <p>
                The concept for this app comes from similar systems within video games, where the player is given a picture of a landscape and must find where the picture was taken from.
                I personally found those sorts of puzzles fun, and realized that a similar idea could exist in the real world.
                This app is designed to give people an activity to do while out and about, and lead people to interesting places they might otherwise miss out on.
            </p>
            <ImageText imgUrl="/img/pichunt/ss1.png" mirror={false}>
                Because this is designed to be used while outside, the data usage must be kept as minimal as possible. This is achieved by showing only a thumbnail of the picture whenever 
                possible, and only loading the full picture when the user opens the full image. All the images are cached once they are loaded, so reloading the app, or individual screens, 
                does not force the image to be downloaded again.
            </ImageText>
            </Project>
        </PageTemplate>

    </div>
)