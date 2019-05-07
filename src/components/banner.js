import React from "react"
import BannerLinks from "./banner_links"
import HomeLink from "./home_link"
export default () => 
    (
        <div style={{ height: `100px`,
         backgroundColor : `rgb(252, 252, 252)`,
          position: `relative`,
          margin: `auto`,
          display: `flex`,
          flexDirection: `column`,
          borderBottom: `1px solid rgb(206, 204, 204)`}}>
            <div css={{height:`100%`, display: `flex`, justifyContent:`space-between`,alignItems:`center`}}>
             <HomeLink />
             <BannerLinks />
            </div>
        </div>
    )