import React from "react"
import styles from "../styles/css_in_js"

export default (props) => (
    <div css={styles.page_content}>

        <div style={{marginTop: `50px`, fontSize: `1.5em`}}>
            {props.children}
        </div>
    </div>
)