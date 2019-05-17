import React from "react"

export default (props) => (
    <div css={{flexBasis:`75%`, maxWidth:`75%`,wordBreak:`break-word`,
        "@media all and (max-width: 1100px)":{flexBasis:`100%`,width:`100%`, maxWidth:`100%`,margin: `auto`, },
        "@media all and (max-width: 800px)":{fontSize:`.75em` },}}>

        {props.children}
        

        
    </div>
)