import React from "react"

export default (props) => (
    <div css={{flexBasis:`75%`, maxWidth:`75%`,wordBreak:`break-word`,
        "@media all and (max-width: 1100px)":{flexBasis:`100%`, width:`100%`, margin: `auto`, },}}>

        {props.children}
        

        
    </div>
)