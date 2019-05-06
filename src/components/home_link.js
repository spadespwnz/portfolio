import React from "react"
import { navigate} from "gatsby"
export default () => 
    (
        <div style={{display: `flex`, alignItems: `left`, float: `left`, height:`100%`, width:`300px`, paddingLeft:`200px`}}>
            <div style={{display: `flex`, justifyContent:`center`, alignItems:`center`, height:`100%`, width:`300px`, margin:`0`, padding:`0`, textAlign:`center`,
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
                fontSize:`200%`,
                color:`black`,
                transitionDuration: `0.5s`,
                opacity: `.3`,                
            }}
            onClick = { event => {
                event.preventDefault()
                navigate("/")
            }}
            >
            Nathan Brown
            </div>
        </div>
    )