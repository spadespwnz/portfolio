import React, {useState, useEffect} from "react"
import BannerLink from "./banner_link"
import BannerDropdown from "./banner_dropdown_links"
import { navigate} from "gatsby"

export default () => {
    const [mobileListVisible, toggleMobileList] = useState(false);
    function handleClick(e){
        let target;
        try{
            target = e.target.parentElement.parentElement;
        }
        catch{
            return;
        }
        const linkList = document.getElementById('mobile-links')
        if (target !== linkList){

            if (mobileListVisible){
                toggleMobileList(false)
            }
        }
    }

    useEffect(() =>{
        window.addEventListener('click',handleClick)

        return () =>{
            window.removeEventListener('click', handleClick)
        } 
    }, [mobileListVisible])
    return (
    <div style={{display: `flex`, alignItems: `right`, height:`100%`}}>

            <BannerLink pageName="xi:Bound" url="xibound" />
            <BannerLink pageName="PicHunt" url="pichunt" />
            <BannerLink pageName="Arduino Midi Player" url="arduino" />
            <BannerLink pageName="SPaDeS Tools" url="spadestools" />
            <div css={{
                "@media all and (min-width: 1451px)":{display:`none`},
                //"@media all and (max-width: 1450px)":{display:`none`},
                }}>
                    
                <BannerDropdown name="Featured" items={[{
                                                name:"xi:Bound",url:"xibound"},
                                                {name:"PicHunt", url:"pichunt"},
                                                {name:"Arduino Midi Player",url:"arduino"},
                                                {name:"SPaDeS Tools", url:"spadestools"} ]} />
            </div>
            <BannerDropdown name="Work In Progress" items={[{
                                                name:"Alexandria",url:"alexandria"},
                                                {name:"Shooter - Unity", url:"shooter"}]} />

            <BannerDropdown name="Experiments" items={[
                                                {name:"Jog Tracker", url:"jog"},
                                                {name:"WebApp Experiments", url:"webapps"},
                                                {name:"Discord Condensor", url:"discord_bot"}]}
                                            />

            <BannerDropdown name="Other" items ={[{
                                                name:"BFAssist", url:"bfassist"},
                                                {name:"Twitch Overlay",url:"polls"},
                                                {name:"Streaming Suite",url:"stream"},
                                                {name:"Study Notifications", url:"study"},
                                                ]}
                                            />
            <div css={{"@media all and (min-width: 976px)":{display:`none`}, display:`block`, position:`relative`, 
                zIndex:`3`}}>
                <div css={{
                    display:`flex`, alignItems:`center`,justifyContent:`center`,marginRight:`10px`,marginLeft:`auto`,height:`100%`, width:`34px`,
                    
                }}
                onClick={  () => {  toggleMobileList(!mobileListVisible) } }>
                    
                    <div id="menuToggle" css={{color:`red`, display:`block`}}>
                    
                    {mobileListVisible ? <input type="checkbox" checked /> : <input type="checkbox" />}
                        
                        <span></span>
                        <span></span>
                        <span style={{marginBottom:`0px`}}></span>
                        <div></div>
                        
                    </div>
                
                </div>
                {mobileListVisible && 
                    <div id="mobile-links"  css={{
                        position:`relative`, display: `block`, width:`100vw`,
                        backgroundColor: `rgb(32, 50, 79)`, color:`rgb(232, 232, 232)`, marginRight: `0vw`,
                        textAlign:`left`}}>
                        <ul css={{marginBlockStart:`0`, marginBlockEnd:`0`, lineHeight:`2.5`, fontSize: `1em`,
                                 listStyleType: `none`, marginLeft:`0px`,paddingTop: `20px`, paddingLeft:`0px`, fontWeight: `300`}}>

                            <li className="mobile-list-item" onClick={e => {navigate("xibound")}}>
                                xi:Bound
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("pichunt")}}>
                                [WIP] PicHunt
                            </li><li className="mobile-list-item" onClick={e => {navigate("spadestools")}}>
                                SPaDeS Tools
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("arduino")}}>
                                Arduino Midi Player
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("polls")}}>
                                Twitch Overlay
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                [WIP] Alexandria
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("bfassist")}}>
                                BFAssist
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("stream")}}>
                                Personal Stream Suite
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("webapps")}}>
                                WebApp Experiments
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Study Notifications
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Jog Tracker
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                Discord Condensor
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("study")}}>
                                Study Notifications
                            </li>
                            <li className="mobile-list-item" onClick={e => {navigate("")}}>
                                [WIP] Top-Down Space Shooter
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
