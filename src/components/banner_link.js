import React from "react"
import { navigate} from "gatsby"
import styles from "../styles/css_in_js"
export default (props) => 
    (   
        <div 
            css={styles.banner_link}
            onClick = { event => {
                event.preventDefault()
                navigate(props.url)
            }}
            >
            {props.pageName}
        </div>
    )