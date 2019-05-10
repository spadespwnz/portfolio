import React from "react"
import BannerLinks from "./banner_links"
import HomeLink from "./home_link"
export default () => 
    (
        <div css={{ 
          height: `100px`,
          backgroundColor : `rgb(252, 252, 252)`,
          position: `relative`,
          margin: `auto`,
          display: `flex`,
          flexDirection: `column`,
          borderBottom: `1px solid rgb(206, 204, 204)`,
          "@media all and (max-height: 700px)":{height: '50px'},
          transitionDuration:`1s`,
          }}>
            <div css={{maxWidth:`1400`,
            width: `1400`,
            height:`100%`,
            display: `flex`, 
            justifyContent:`space-between`,
            alignItems:`center`,
            marginRight:`0`,
            marginLeft:`auto`,
            "@media all and (max-width: 1600px)":{maxWidth: `100%`},
            
            }}>
             <HomeLink />
             <BannerLinks />
            </div>
        </div>
    )