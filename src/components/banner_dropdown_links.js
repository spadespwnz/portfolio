import React from "react"
import DropdownLink from "./dropdown_link"
import styles from "../styles/css_in_js"
import "../styles/banner_dropdown_link.css"

export default (props) => (
        <div className="dropdown" css={styles.banner_link}>
            <div css={{width:`100%`,height:`100%`, display:`flex`,justifyContent:`center`,alignItems:`center`, flexDirection: `column`}}>
                <p css={{margin:`0`}}>{props.name}
                </p>
                <p css={{height: `0%`,margin: `0`}}>
                <div css={{
                    display:`block`,
                    margin: `10px`,
                    width: `0`,
                    height: `0`,
                    borderLeft: `6px solid transparent`,
                    borderRight: `6px solid transparent`,
                    borderTop: `6px solid black`,
                }} />
                </p>
            </div>
            
            <div  className="dropdown-menu">
                {props.items.map((item,i) => {
                    return (<DropdownLink name={item.name} key={item.url}/>)
                })}

                
            </div>
        </div>
    )