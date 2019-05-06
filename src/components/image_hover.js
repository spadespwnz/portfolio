import React from "react"
export default (props) => (
        <div css={{width:`300`,
                    height:`300`,
                    display: `inline-block`,
                    position: `relative`,
                    margin:`20px`}}>
            {props.children}
            <img css={{width: `100%`, height: `100%`,top:`0`,left:`0`,position:`absolute`,
        ':hover':{
            opacity: `0`,
            transitionDuration: `.5s`,
        },
        transitionDuration: `.5s`,}} src={'img/ss/'+props.imgUrl} />
        </div>
    )