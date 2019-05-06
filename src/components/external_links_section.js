import React from "react"
import styles from "../styles/css_in_js"
export default () => (
    <div css={styles.external_links}>
        <p>Github</p>
        <p>LinkedIn</p>
        <p>Resume</p>
        <a href="mailto:NathanBrownDev@gmail.com" css={{textDecoration: `underline`, color: `rgb(255, 132, 132)`}}>NathanBrownDev@gmail.com</a>
    </div>
)