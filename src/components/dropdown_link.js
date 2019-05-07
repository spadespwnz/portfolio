import React from "react"
import styles from "../styles/css_in_js"
export default (props) => (
    <div css={styles.dropdown_item}>
        {props.name}
    </div>
)