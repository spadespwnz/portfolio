module.exports = {
    banner_link : {
        ':hover': {
            cursor:`pointer`,
            //backgroundColor:`black`,
            textDecoration: `underline`,
            backgroundColor: `rgba(255, 132, 132,0.5)`,
            width: `200px`,
            size: `150%`,
            transitionDuration: `0.5s`,
        },
        transitionDuration: `0.2s`,
        display: `flex`,
        justifyContent:`center`, 
        alignItems:`center`, 
        height:`100%`,
        width:`150px`, 
        margin:`0`, 
        padding:`0`, 
        textAlign:`center`,
        "@media all and (max-width: 1450px)":{display: `none`},
    },
    dropdown_link:{
        ':hover': {
            cursor:`pointer`,
            //backgroundColor:`black`,
            textDecoration: `underline`,
            backgroundColor: `rgba(255, 132, 132,0.5)`,
            width: `200px`,
            size: `150%`,
            transitionDuration: `0.5s`,
        },
        transitionDuration: `0.2s`,
        position: `relative`,
        display: `inline-block`, 
        justifyContent:`center`, 
        alignItems:`center`, 
        height:`100%`,
        width:`150px`, 
        margin:`0`, 
        padding:`0`, 
        textAlign:`center`,
        float: `left`,
        display: `block`,
        "@media all and (max-width: 975px)":{display: `none`},
    },
    dropdown_item:{
        display: `flex`,
        height: `75px`,
        backgroundColor: `white`,
        alignItems: `center`,
        justifyContent: `center`,
        boxShadow: `2px 3px`,
        ":hover":{
            transitionDuration: `0.2s`,
            borderLeft: `7px solid grey`,
        }
    },
    page_content:{
        "@media all and (max-width: 800px)":{maxWidth: `90%`},
        minHeight: `70vh`,
        display: `inline-block`,
        margin: `10px`,
        marginTop: `50px`,
        backgroundColor: `white`,
        whiteSpace: `pre-line`,
        verticalAlign: `top`,
        textAlign: `left`,
        lineHeight: `1.5`,
    },
    external_links:{
        width: `200px`,
        height: `150px`,
        zIndex: `2`,
        opacity: `1`,
        margin: `0 auto`,
        display: `inline-block`,
        border: `1.1px solid rgb(195, 212, 229)`,
        borderRadius: `20px 0px 20px 0px`,
        backgroundColor: `rgb(239, 247, 255)`,
        position: 'fixed',
        right: `0`,
        bottom: `0`,
        "@media all and (max-width: 1250px)":{display: `none`},
    },
    external_links_botton:{
        width: `50px`,
        height: `50px`,
        zIndex: `2`,
        opacity: `1`,
        margin: `0 auto`,
        display: `inline-block`,
        border: `1.1px solid rgb(195, 212, 229)`,
        borderRadius: `20px 0px 20px 0px`,
        backgroundColor: `rgb(239, 247, 255)`,
        color: `rgba(255, 132, 132,0.5)`,
        position: 'fixed',
        right: `0`,
        bottom: `0`,
        "@media all and (min-width: 1249px)":{display: `none`},
    },
    title:{
        textDecoration: `overline underline`,
        opacity: `1`,
        color: `rgb(195, 212, 229)`,
        margin: `auto`,
        fontSize: `2.5em`,
        marginTop: `70px`,
        marginBottom: `30px`,
        fontFamily:`helvetica`
    }

}