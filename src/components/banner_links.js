import React from "react"
import BannerLink from "./banner_link"
import BannerDropdown from "./banner_dropdown_links"
export default () => (
    <div style={{display: `flex`, alignItems: `right`, float: `right`, height:`100%`}}>
        <BannerLink pageName="xi:Bound" url="xibound" />
        <BannerLink pageName="PicHunt" url="pichunt" />
        <BannerLink pageName="Arduino Midi Player" url="arduino_midi" />
        <BannerLink pageName="SPaDeS Tools" url="spades_tools" />
        <BannerDropdown name="Work In Progress" items={[{name:"Alexandria",url:"alexandria"},{name:"Shooter - Unity", url:"shooter"}]} />
        <BannerDropdown name="Experiments" items={[{name:"Unity Testing", url:"unity"},
                                                {name:"Jog Tracker", url:"jog"},
                                                {name:"Discord Condensor", url:"discord_bot"}]}/>
        <BannerDropdown name="Other" items ={[{name:"BFAssist", url:"bfassist"},{name:"Twitch Overlay",url:"twitch_overlay"},
                                            {name:"Streaming Suite",url:"stream"},{name:"Study Notifications (Gomain3)", url:"study"},
                                            {name:"Various Simple Webapps (chat/lists/images/etc)", url:"webapp"},
                                            {name:"Arduino Motor Controller",url:"arduino_motor"},
                                            {name:"SPaDeS Tools Race Server", url:"race_server"}]}/>
    </div>
)

//song changer
//old portfolio
//very old projects
//Unity RPG
