import React from "react"
import BannerLink from "./banner_link"

export default () => (
    <div style={{display: `flex`, alignItems: `right`, float: `right`, height:`100%`}}>
        <BannerLink pageName="xi:Bound" url="xibound" />
        <BannerLink pageName="PicHunt" url="pichunt" />
    </div>
)