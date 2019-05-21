import React from "react"
import Sidebar from "../components/sidebar"
import Project from "../components/project_info"
import PageTemplate from "../components/page_template"
import ImageText from "../components/ImageText"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {graphql} from "gatsby"
export default ({data}) => (
    <PageTemplate sidebar={true} width="1000px">
        <Sidebar title="Arduino Midi Player">
            Microcontroller Device
            <p css={{marginBlockEnd:`0`}}>Github:</p>

            <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/arduino-code/blob/master/Doorbell/Doorbell.ino">Arduino Code</a>
            </span>
            <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/midi-parser/blob/master/main.go">Parser Code</a>
            </span>
            <span css={{display:`block`}}>
            <a href="https://github.com/spadespwnz/arduino-code/blob/master/NoteTest/NoteTest.ino">Experimental Code</a>
            </span>
            <p>
                Go, C++
            </p>
        </Sidebar>
        <Project>
            <div css={{height:`0`,width:`100%`,paddingBottom:`56.25%`, position:`relative`}}>
                <iframe css={{width:`100%`,height:`100%`, position:`absolute`,left:`0`,top:`0`}} width="560" height="315" src="https://www.youtube.com/embed/tP3PCeuBgHY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>
                This project makes use of an Arduino Microcontroller to controller buzzers and lights to play and visualize notes that are passed from a MIDI parser.
                The Arduino has a wifi-card connected, which allows it run a server. The MIDI parser, Written in GoLang, takes a given MIDI file and parses it into a simple format that can
                be streamed to the Arduino over wifi. The timing of the notes is controlled by the parser, and the Arduino player plays the notes as they are received.
            </p>
            <p>
                The notes are converted to a frequence before sent accross to the player, then each note is played by an individual buzzer.
            </p>
            <Img fluid={data.diagram1.childImageSharp.fluid} />
            <p>
                Each buzzer needs to be powered on and off repeatedly to make a sound. The correct note is created by toggling power to the buzzer at the frequence of the note needed.
                To achieve this, each buzzer is connected to a different pin, and when a note needs to be played, an interrupt timer is enabled for the pin that fires at the frequence needed,
                and toggles power for the pin on and off. The frequencies of notes commonly used range between 100-1000.
            </p>
            <p>
                The Arduino Player also displays a visualization of which buzzers are currently outputting noise, created using LED lights. A 3-to-8 Decoder is used to minimize the 
                number of pins required. The light display is updated every time a note starts or stops playing.
            </p>
            <div css={{opacity:`0.5`,fontSize:`2em`, fontWeight: `600`, textDecoration:`underline`}}>
                Further Work    
            </div>
            <p>
                After completing this project, I tested a few more possible ways to use the buzzers. It is possible to control the volume of a buzzer by toggling 
                power on and off at a higher frequency than the ear can hear. This is done by switching back and forth from 0 power, to pulsing on and off at a frequency higher than 
                the ear can hear, back to 0 power.
            </p>
            <Img fluid={data.diagram2.childImageSharp.fluid} />
            <p>
                Using this technique, the maximum volume is only 50% of the volume normally possible. This works because of the way the human ear averages the output of frequencies higher 
                than it can hear, and the specific note is created by the frequence at which it switches between no output, and high-frequence output.
            </p>
            <p>
                The specific volume is managed by controlling percentage of time power is on or off during the high frequency sections of output.
            </p>
            <Img fluid={data.diagram3.childImageSharp.fluid} />
            <p>
            Whereas in the diagram before, the power was split evenly as 50% on and 50% within the high-frequency sections, in this diagram the volume would be much lower because 
            the power is on only about 10% of the time.
            </p>
            <p>
                Using this technique to change the volume, I proceeded to try and come up with a method to play 2 notes from the same buzzer at the same time. 
                A note can actually be expressed as a sine wave, and the method of turning the power on and off simply creates a crude version of a sine wave.
                This means that a note can also be created by scaling from 0% volume, up to 100% volume, and back down, instead of toggling on and off.
            </p>
            <Img fluid={data.diagram4.childImageSharp.fluid} />
            <p>
                The specific note is now being created by the frequence at which the volume on the buzzer shifts from 0% to 100% and back.
            </p>
            <p>
                When the ear hears a note which is complex, such as a note that can't be defined by a simple sine wave, it does a type of fourier analysis 
                to break it into a combination of notes of simple sine waves.
            </p>
            <Img fluid={data.diagram5.childImageSharp.fluid} />
            <p>
                Because of this effect, it is possible to create 2 notes from the same buzzer at the same time by changing the volume in relation to the sum of the waves of the notes; essentially 
                creating the complex wave manually. Using this method I was able to get 2 notes playing at the same time, confirmed by a sound analysis tool, but there were many issues.
                For one, The Arduino simply isn't powerful enough to do the sine calculations required in real time. I created a lookup table for sine values to increase the speed, but 
                this loses out on accuracy. The Arduino clock speed is not fast enough to get the toggling speed required for accuracy in the volume being output. To get successful results
                I had to choose notes that had strong interference as to have large enough changes in volume throughout each period of the wave.
            </p>
            <div>
                <Img css={{width:`33%`, display:`inline-block`, margin:`auto`}}fluid={data.spectrum1.childImageSharp.fluid} />
                <Img css={{width:`33%`, display:`inline-block`, margin:`auto`}}fluid={data.spectrum2.childImageSharp.fluid} />
                <Img css={{width:`33%`, display:`inline-block`, margin:`auto`}}fluid={data.spectrum3.childImageSharp.fluid} />
            </div>
            <p>
                The left image and center image both show the buzzer playing one individual note, then the rightmost image shows the spectogram of the buzzer playing both notes at the 
                same time. 
            </p>
        </Project>
    </PageTemplate>
)

export const query = graphql`
  query {
    diagram1: file(relativePath: { eq: "arduino/diagram1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    },
    diagram2: file(relativePath: { eq: "arduino/diagram2.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      diagram3: file(relativePath: { eq: "arduino/diagram3.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      diagram4: file(relativePath: { eq: "arduino/diagram4.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      diagram5: file(relativePath: { eq: "arduino/diagram5.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      spectrum1: file(relativePath: { eq: "arduino/1.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      spectrum2: file(relativePath: { eq: "arduino/2.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
      spectrum3: file(relativePath: { eq: "arduino/3.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      },
  }
`