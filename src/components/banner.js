import React from "react"
import BannerLinks from "./banner_links"
import HomeLink from "./home_link"
export default () => 
    (
        <div style={{ height: `100px`,
         backgroundColor : `rgb(252, 252, 252)`,
          margin: `0`,
          borderBottom: `1px solid black`}}>
            <HomeLink />
            <BannerLinks />
        </div>
    )