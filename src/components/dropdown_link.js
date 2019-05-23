import React from "react"
import { navigate} from "gatsby"
import styles from "../styles/css_in_js"
export default (props) => (
    <div css={styles.dropdown_item}
    onClick = { () => {
        navigate(props.url)
    }}>
        {props.name}
    </div>
)