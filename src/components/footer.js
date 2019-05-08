import React from "react"

export default () => (
    <div css={{backgroundColor:`rgb(5, 24, 56)`,width:`100%`,color: 'white',}}>
        
        <div css={{
            position:`relative`,
            marginLeft:`auto`,
            marginRight:`auto`,
            display:`flex`,
            flexDirection:`row`,
            justifyContent:`space-between`,
            paddingBottom:`50px`,
            paddingTop:`50px`,
            alignItems:`left`,
            textAlign:`left`,
            '@media (min-width: 1200px)': {width: `1200px`},


        }}>
            <div css={{width:`300px`}}>
                <p css={{fontSize:'20',marginBlockEnd: `0.3em`}}>
                Nathan Brown
                </p>
                <a href="mailto:NathanBrownDev@gmail.com" css={{textDecoration: `underline`, color: `rgb(255, 132, 132)`}}>NathanBrownDev@gmail.com</a>
                <p css={{color:`rgb(175, 175, 175)`}}>
                    Feel free to send me an email with any questions, concerns, or opportunities.
                </p>
            </div>
            <div css={{width:`300px`}}>
                <p css={{fontSize:'20',marginBlockEnd: `0.3em`}}>
                Online
                </p>
                <p/>
                <a href="https://github.com/spadespwnz" css={{
                    color:`rgb(175, 175, 175)`,
                    textDecoration:`none`,
                    ':hover':{textDecoration:`underline`}
                    }}>Github</a>
                <p css={{marginBlockEnd: `0.1em`, marginBlockStart: `0`}} />
                <a href="https://www.linkedin.com/in/nathanbrowndev/" css={{
                    color:`rgb(175, 175, 175)`,
                    textDecoration:`none`,
                    ':hover':{textDecoration:`underline`}
                    }}>LinkedIn</a>
                <p css={{marginBlockEnd: `0.1em`, marginBlockStart: `0`}} />
                <p css={{marginBlockEnd: `0.1em`, marginBlockStart: `0`,
                    color:`rgb(175, 175, 175)`,
                    textDecoration:`none`,
                    }}>Discord: <span css={{color:`white`}}>SPaDeS#2644</span></p>
            </div>

        </div>
    </div>
)