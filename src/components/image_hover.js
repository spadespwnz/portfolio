import React from "react"
import { navigate} from "gatsby"

function hover(e, img){
    e=e.target
    console.log(e)
    e.setAttribute('src', img)
}
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
                }}}>
            {props.children}
            <img css={{width: `100%`, height: `100%`,top:`0`,left:`0`,position:`absolute`,
                transitionDuration: `2s`,
            }} src={'img/ss/'+props.hoverUrl} 
        //onMouseOver={(e) => hover(e,'img/ss/'+props.hoverUrl)}
        //onMouseOut={(e) => hover(e, 'img/ss/'+props.imgUrl)} 
        />

       
        <img css={{width: `100%`, height: `100%`,top:`0`,left:`0`,position:`absolute`, backgroundColor:`white`,
        ':hover':{

            opacity:`0`,
            transitionDuration: `1s`,
        },
        transitionDuration: `2s`,}} src={'img/ss/'+props.imgUrl} 
        //onMouseOver={(e) => hover(e,'img/ss/'+props.hoverUrl)}
        //onMouseOut={(e) => hover(e, 'img/ss/'+props.imgUrl)} 
        />
        </div>

    )