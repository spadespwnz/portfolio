import React, {useState} from "react"
import styles from "../styles/css_in_js"
import { Link } from "gatsby"
export default () => {
    const [popupLinks, togglePopupLinks] = useState(false);
    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);

    function click(){
        setWidth(Math.abs(width-250))
        setHeight(Math.abs(height-250))
        togglePopupLinks(!popupLinks)
    }
    return (
    <div>
        <div css={styles.external_links}>
            <p><a href="https://github.com/spadespwnz">Github</a></p>
            <p><a href="https://www.linkedin.com/in/nathanbrowndev/">LinkedIn</a></p>
            <p><Link to="/resume.pdf">Resume</Link></p>
            <a href="mailto:NathanBrownDev@gmail.com" css={{textDecoration: `underline`, color: `rgb(255, 132, 132)`, fontSize: `.75em`}}>NathanBrownDev@gmail.com</a>
        </div>
        <div css={styles.external_links_botton} style={{width:width, height:height}}
         onClick={() => {click()}}>
            {popupLinks && <div>
                    <p><a href="https://github.com/spadespwnz">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/nathanbrowndev/">LinkedIn</a></p>
                    <p><Link to="/resume.pdf">Resume</Link></p>
                    <a href="mailto:NathanBrownDev@gmail.com" css={{textDecoration: `underline`, color: `rgb(255, 132, 132)`, fontSize: `.75em`}}>NathanBrownDev@gmail.com</a>
                </div>
            }
            <div css={{position:`absolute`,right:`10`, bottom:`45px`}}>
                <span css={{width:`20px`,height:`1px`, backgroundColor:`rgb(255, 132, 132)`, display:`block`,position:`relative`, left:`10`,top:`10`}}></span>
                <span css={{width:`20px`,height:`1px`, backgroundColor:`rgb(255, 132, 132)`, display:`block`,position:`relative`, left:`10`,top:`10`,
                    transform:`rotate(90deg) translate(9px,9.5px)`
                }}></span>
                <span css={{width:`40px`,height:`1px`, backgroundColor:`rgb(255, 132, 132)`, display:`block`,position:`relative`, left:`10`,top:`10`,
                    transform:`rotate(45deg) translate(5px,12.3px)`
                }}></span>
                <span css={{width:`20px`,height:`1px`, backgroundColor:`rgb(255, 132, 132)`, display:`block`,position:`relative`, left:`10`,top:`10`,
                    transform:`rotate(90deg) translate(15.5px,-19px)`
                }}></span>
                <span css={{width:`20px`,height:`1px`, backgroundColor:`rgb(255, 132, 132)`, display:`block`,position:`relative`, left:`10`,top:`10`,
                    transform:`rotate(0) translate(9.5px,24.5px)`
                }}></span>
            </div>

        </div>
    </div>
    )
}