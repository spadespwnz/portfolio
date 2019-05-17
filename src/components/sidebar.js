import React from "react"
import styles from "../components/sidebar.module.css"
export default (props) => (
    <div className={styles.sidebar} css={{
        flexBasis:`25%`, maxWidth:`25%`,
        "@media all and (max-width: 1100px)":{flexBasis:`100%`, maxWidth:`100%`, marginLeft: `10x`},
        }}>
        <h1 className={styles.sidebarTitle}>{props.title}</h1>
        {props.children}
    </div>
)