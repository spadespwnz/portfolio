import React from "react"
import DropdownLink from "./dropdown_link"
import styles from "../styles/css_in_js"
import "../styles/banner_dropdown_link.css"
import { navigate} from "gatsby"

export default (props) => (
        <div className="dropdown" css={styles.banner_link}>
            <div css={{width:`100%`,height:`100%`, display:`flex`,justifyContent:`center`,alignItems:`center`}}>
                {props.name}
            </div>
            <div  className="dropdown-menu">
                {props.items.map((item,i) => {
                    return (<DropdownLink name={item.name} key={item.url}/>)
                })}

                
            </div>
        </div>
    )