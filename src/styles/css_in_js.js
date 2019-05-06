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
        display: `inline-block`,
        width:`800px`,
        margin: `0`,
        marginTop: `50px`,
        backgroundColor: `white`,
        whiteSpace: `pre-line`,
        verticalAlign: `top`,
        textAlign: `left`,
        lineHeight: `1.5`,
    },
    external_links:{
        width: `300px`,
        margin: `0 auto`,
        marginTop: `100px`,
        marginLeft: `50px`,
        display: `inline-block`,
        border: `1.1px solid rgb(195, 212, 229)`,
        borderRadius: `20px 0px 20px 0px`,
        backgroundColor: `rgb(239, 247, 255)`,
    },
    title:{
        textDecoration: `overline underline`,
        opacity: `1`,
        color: `rgb(195, 212, 229)`,
        margin: `auto`,
        fontSize: `300%`,
        marginTop: `70px`,
        marginBottom: `30px`,
        fontFamily:`helvetica`
    }

}