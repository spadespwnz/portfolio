import React from "react"
export default (props) => (
    <div css={{marginTop: `75px`, marginBottom: `75px`,display: `flex`, flex: `0 1 auto`, flexDirection: props.mirror ? "row-reverse" : "row", flexWrap: `wrap`}}>
        <div css={{maxWidth: `55%`, flexBasis: `55%`, position:`relative`}}>
        <span css={{display: `inline-block`,height:`100%`,verticalAlign:`middle`}}></span>
            <img src={props.imgUrl} css={{width:`100%`, margin:`auto`, verticalAlign:`middle`}}></img>
        </div>
        <div css={{maxWidth: `40%`, flexBasis: `40%`, margin: `auto`}}>
            {props.children}
        </div>
    </div>

)