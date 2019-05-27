import React from "react"
import PageTemplate from "../components/page_template"
import styles from "../pages/error404.module.css"
export default () => (
    <div>
        <PageTemplate sidebar={false} width="1000px">
        <div css={{height:`500px`, display:`flex`, flexDirection:`row`,justifyContent:`center`, alignItems:`center`}}>
            <div className={styles.letter+" "+styles.firstLetter} css={{display:`inline-block`}}>
                4
            </div>
            <div className={styles.letter+" "+styles.secondLetter} css={{display:`inline-block`}}>
                0
            </div>
            <div className={styles.letter+" "+styles.thirdLetter} css={{display:`inline-block`}}>
                4
            </div>
        </div>
        </PageTemplate>
    </div>
)