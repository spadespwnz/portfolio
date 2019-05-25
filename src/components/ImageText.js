import React from "react"
import Img from "gatsby-image"
export default (props) => 
(

    <div css={{marginTop: `75px`, marginBottom: `75px`,display: `flex`, flex: `0 1 auto`, flexDirection: props.mirror ? "row-reverse" : "row", flexWrap: `wrap`}}>
        <div css={{maxWidth: `55%`, flexBasis: `55%`, position:`relative`}}>
        <div css={{display:`flex`, flexDirection:`column`, justifyContent:`center`, height:`100%`}}>
            {props.video ? 
                

                <video muted autoplay="autoplay" loop css={{width: `100%`, margin:`auto`, verticalAlign:`middle`}}>
                    <source css={{height:`100%`, minHeight:`100%`}} src={props.imgUrl} type="video/webm" />
                </video>
                
            :
                props.fluid ? 
                    <div css={{width:`100%`, margin:`auto`, verticalAlign:`middle`}}>
                        <Img fluid={props.fluid} />
                    </div>
                 : 
                    <img src={props.imgUrl} css={{width:`100%`, margin:`auto`, verticalAlign:`middle`}} alt='' ></img>
            }
            </div>
        </div>
        <div css={{maxWidth: `40%`, flexBasis: `40%`, margin: `auto`}}>
            {props.children}
        </div>
    </div>

)