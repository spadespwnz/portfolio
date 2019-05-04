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
                    fontSize:`300%`,
                    color:`red`,
                    transitionDuration: `0.5s`,
                    
                },
                fontSize:`100%`,
                color:`black`,
                backgroundColor:`white`,
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