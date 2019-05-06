import React from "react"

export default (props) => (
    <div css={{width:`370px`,margin:`15px`, marginTop: `0px`, marginBottom: `30px`, display:`inline-block`,verticalAlign: `top`,}}>
        <div css={{margin: `10`, fontWeight: `400`}}>{props.title}</div>
        <div css={{marginBlockStart: `0`, fontSize: `20`}}>{props.children}</div>
    </div>
)