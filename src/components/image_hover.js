import React from "react"
import { navigate} from "gatsby"
import Img from "gatsby-image"
export default (props) => (

        <div onClick= {event => {
                navigate(props.url)
            }} 
            css={{width:`300`,
                height:`300`,
                left:`0`,
                top:`0`,
                display: `inline-block`,
                position: `relative`,
                margin:`20px`,
                border: `2px solid rgba(1,1,1,0)`,
                ':hover':{
                    cursor:`pointer`,
                    border: `2px solid rgb(255, 132, 132)`
                },
                "@media all and (max-width: 600px)":{marginLeft: `0px`, marginRight: `0px`},}}>
            {props.children}
            <video muted autoplay="autoplay" loop css={{width: `100%`, height: `100%`,top:`0`,left:`0`,position:`absolute`,
                    transitionDuration: `2s`, objectFit:`fill`
                }}>
                
                
                <source css={{height:`100%`, minHeight:`100%`}} src={props.hoverUrl} type="video/webm" />

            </video>
            

        {props.fluid &&
            <div css={{width: `100%`, height: `100%`,top:`0`,left:`0`,position:`absolute`, backgroundColor:`white`,
            ':hover':{
                opacity:`0`,
                transitionDuration: `1s`,
            },
            transitionDuration: `2s`,}}>
                <Img fixed={props.fluid} />
            </div>
        }
        {!props.fluid &&
        <img alt="" css={{width: `100%`, height: `100%`,top:`0`,left:`0`,position:`absolute`, backgroundColor:`white`,
        ':hover':{

            opacity:`0`,
            transitionDuration: `1s`,
        },
        transitionDuration: `2s`,}} src={'img/ss/'+props.imgUrl} 
        />
        }
        </div>

    )