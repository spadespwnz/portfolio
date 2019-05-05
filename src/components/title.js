import React from "react"
import styles from "../styles/css_in_js"
export default (props) => (
    <div css={styles.title}>
        {props.title}
    </div>
)