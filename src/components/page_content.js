import React from "react"
import styles from "../styles/css_in_js"

export default (props) => (
    <div css={styles.page_content} >
        <div css={{maxWidth: props.width, marginTop: `50px`, fontSize: `1.5em`,fontWeight: `300`,
        fontFamily:`Segoe UI`, marginBottom:`100px`, display: `flex`, flex: `0 1 auto`, flexDirection: `row`, flexWrap: `wrap`,boxSizing:`border-box`}}>
            {!props.sidebar ? (<div>
                {props.children}
            </div>) : props.children}
        </div>
        
    </div>
)