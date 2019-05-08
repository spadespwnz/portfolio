import React from "react"
import styles from "../styles/css_in_js"
import { Link } from "gatsby"
export default () => (
    <div css={styles.external_links}>
        <p><a href="https://github.com/spadespwnz">Github</a></p>
        <p><a href="https://www.linkedin.com/in/nathanbrowndev/">LinkedIn</a></p>
        <p><Link to="/resume.pdf">Resume</Link></p>
        <a href="mailto:NathanBrownDev@gmail.com" css={{textDecoration: `underline`, color: `rgb(255, 132, 132)`}}>NathanBrownDev@gmail.com</a>
    </div>
)