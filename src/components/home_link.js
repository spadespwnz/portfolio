import React from "react"
import { navigate} from "gatsby"
export default () => 
    (
        <div style={{display: `flex`, alignItems: `left`, float: `left`, height:`100%`, marginRight: `-1000px`}}>
            <div style={{display: `flex`, justifyContent:`center`, alignItems:`center`, height:`100%`, margin:`0`, padding:`0`, textAlign:`center`,
            }}
            
            css={{
                ':hover': {
                    //textDecoration: `underline`,
                    //backgroundColor: `black`, 
                    cursor:`pointer`,
                    transitionDuration: `0.5s`,
                    color: `rgb(255, 132, 132)`,
                    opacity: `1`,
                    
                },
                fontSize:`30px`,
                color:`black`,
                transitionDuration: `0.5s`,
                opacity: `.5`,                
            }}
            onClick = { event => {
                event.preventDefault()
                navigate("/")
            }}
            >
             <img css={{':hover':{

                },
                marginRight: `10px`,
                height: `80%`,
                 transitionDuration: `2s`,
                 borderRadius: `50%`}} src={'img/profile.jpg'} />
            Nathan Brown
            </div>
        </div>
    )