import React, {useState, useEffect, useRef} from "react"
import BannerLink from "./banner_link"
import BannerDropdown from "./banner_dropdown_links"
import { navigate} from "gatsby"

export default () => {
    const [mobileListVisible, toggleMobileList] = useState(false);
    const [initialized, setInitialized ] = useState(false);
    let refValue = useRef(mobileListVisible);
    function handleClick(e){
        const target = e.target.parentElement.parentElement;
        const linkList = document.getElementById('mobile-links')
        if (target != linkList){

            if (refValue.current){
                toggleMobileList(false)
            }
        }
    }
    useEffect(
        () =>{
            refValue.current = mobileListVisible;

        },
        [mobileListVisible]
    )
    useEffect(() =>{
    
        if (!initialized){
            window.addEventListener('click',handleClick)
            setInitialized(true)
        }
        return () =>{
            window.removeEventListener('click', handleClick)
        } 
    }, [])
    return (
    <div style={{display: `flex`, alignItems: `right`, height:`100%`}}>

            <BannerLink pageName="xi:Bound" url="xibound" />
            <BannerLink pageName="PicHunt" url="pichunt" />
            <BannerLink pageName="Arduino Midi Player" url="arduino_midi" />
            <BannerLink pageName="SPaDeS Tools" url="spades_tools" />
            <div css={{
                "@media all and (min-width: 1450px)":{display:`none`},
                //"@media all and (max-width: 1450px)":{display:`none`},
                }}>
                    
                <BannerDropdown name="Featured" items={[{
                                                name:"xi:Bound",url:"xibound"},
                                                {name:"PicHunt", url:"pichunt"},
                                                {name:"Arduino Midi Player",url:"arduino_midi"},
                                                {name:"SPaDeS Tools", url:"spades_tools"} ]} />
            </div>
            <BannerDropdown name="Work In Progress" items={[{
                                                name:"Alexandria",url:"alexandria"},
                                                {name:"Shooter - Unity", url:"shooter"}]} />

            <BannerDropdown name="Experiments" items={[
                                                {name:"Unity Testing", url:"unity"},
                                                {name:"Jog Tracker", url:"jog"},
                                                {name:"Discord Condensor", url:"discord_bot"}]}
                                            />

            <BannerDropdown name="Other" items ={[{
                                                name:"BFAssist", url:"bfassist"},
                                                {name:"Twitch Overlay",url:"twitch_overlay"},
                                                {name:"Streaming Suite",url:"stream"},
                                                {name:"Study Notifications (Gomain3)", url:"study"},
                                                {name:"Various Simple Webapps (chat/lists/images/etc)", url:"webapp"},
                                                {name:"Arduino Motor Controller",url:"arduino_motor"},
                                                {name:"SPaDeS Tools Race Server", url:"race_server"}]}
                                            />
            <div css={{"@media all and (min-width: 975px)":{display:`none`}, display:`block`, position:`relative`,
                zIndex:`2`}}>
                <div css={{
                    display:`flex`, alignItems:`center`,justifyContent:`center`,marginRight:`10px`,marginLeft:`auto`,height:`100%`, width:`34px`,
                    
                }}
                onClick={  () => {  toggleMobileList(!mobileListVisible) } }>
                    <div id="menuToggle" css={{color:`red`, display:`block`}}>
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span style={{marginBottom:`0px`}}></span>
                        <div></div>
                    </div>
                
                </div>
                {mobileListVisible && 
                    <div id="mobile-links" css={{position:`relative`, display: `block`, width:`100%`, backgroundColor: `rgb(32, 50, 79)`, color:`rgb(232, 232, 232)`,textAlign:`left`}}>
                        <ul css={{marginBlockStart:`0`, marginBlockEnd:`0`, lineHeight:`2`,
                                 listStyleType: `none`, padding:`5px`}}>

                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                xi:Bound
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                [WIP] PicHunt
                            </li><li className="mobile-list-item" onClick={e => {navigate("")}}>
                                SPaDeS Tools
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Arduino Midi Player
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Twitch Overlay
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                [WIP] Alexandria
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                BFAssist
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Personal Stream Suite
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Various Simple WebApps
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Study Notifications
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Jog Tracker
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Race Server for SPaDeS Tool
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Arduino Motor Controller
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Discord Condensor
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Study Notifications
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                [WIP] Top-Down Space Shooter
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Unity Experiment
                            </li>
                        </ul>

                    </div>
                }
            </div>
            


    </div>
)
}
//song changer
//old portfolio
//very old projects
//Unity RPG
