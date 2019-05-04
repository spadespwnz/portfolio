import React from "react"
import { navigate} from "gatsby"
export default (props) => 
    (   
        <div style={{display: `flex`, justifyContent:`center`, alignItems:`center`, height:`100%`,width:`100px`, margin:`0`, padding:`0`, textAlign:`center`,
            }}
            css={{
                ':hover': {
                    cursor:`pointer`,
                    //backgroundColor:`black`,
                    textDecoration: `underline`,
                    backgroundColor: `rgba(255,0,0,.5)`, 
                },
            }}
            onClick = { event => {
                event.preventDefault()
                navigate(props.url)
            }}
            >
            {props.pageName}
        </div>
    )