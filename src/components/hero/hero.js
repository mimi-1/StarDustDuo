//transition documntation
//http:/reactcommunity.org/react-transition-group/transition
//default transitions for material-ui
//https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/styles/createTransitions.js

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import { useStaticQuery, graphql } from "gatsby"
import {
  StaticImage,
  // GatsbyImage,
  // getImage,
  // withArtDirection,
} from "gatsby-plugin-image"
import { Hidden, Fade, Zoom, Box } from "@material-ui/core/"
import theme from "../theme/theme"
import HeroParticles from "./heroParticles"
import { Transition } from "react-transition-group"

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundColor: "#000000",
  },
  heroImage: {
    display: "block",
    backgroundColor: "#000000",
    minHeight: theme.spacing(50),
    maxHeight: "calc(100vh - 3rem)",
    [theme.breakpoints.down("xs")]: {
      top: "0",
      height: "100%",
    },
  },
  heroText: {
    top: "20%",
    // left="40%"
    left: 0,
    right: 0,
    // margin: "0 auto",
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: 300,
    width: "30%",
    // minHeight: "20%",
    // maxHeight: "40%",
    [theme.breakpoints.down("md")]: {
      top: "20%",
      minWidth: 300,
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      // width: 100,
      // left: 0,
      // right: 0,
      top: "35%",
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}))

const Hero = props => {
  const classes = useStyles()
  const smallWidth = theme.breakpoints.values.md
  // const smallHeight = smallWidth * 0.75
  // // getting images from graphql
  // const backgrounds = useStaticQuery(graphql`
  //   query {
  //     mobile: file(name: { eq: "hero_mobile" }) {
  //       relativePath
  //       childImageSharp {
  //         gatsbyImageData(
  //           layout: FULL_WIDTH
  //           aspectRatio: 1.05
  //           backgroundColor: "#ffffff"
  //           transformOptions: { fit: CONTAIN }
  //         )
  //       }
  //     }
  //     desktop: file(name: { eq: "hero_desktop" }) {
  //       relativePath
  //       childImageSharp {
  //         gatsbyImageData(
  //           layout: FULL_WIDTH
  //           aspectRatio: 3.19
  //           backgroundColor: "#ffffff"
  //           transformOptions: { fit: CONTAIN }
  //         )
  //       }
  //     }
  //   }
  // `)

  // const images = withArtDirection(
  //   getImage(backgrounds.desktop.childImageSharp),
  //   [
  //     {
  //       media: "(max-width: 1024px)",
  //       image: getImage(backgrounds.mobile.childImageSharp),
  //     },
  //   ]
  // )

  const duration = 3000
  //transition: <property> <duration> <timing-function> <delay>;
  const defaultStyle = {
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    opacity: 0,
    transform: "scale(5)",
  }

  const transitionStyles = {
    entering: { opacity: 0.5 },
    entered: { opacity: 1, transform: "scale(1)" },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  }

  return (
    <>
      <Box position="relative" className={classes.heroContainer}>
        <Hidden smDown>
          <Fade in timeout={props.isAnimated ? 8000 : 0}>
            <StaticImage
              className={classes.heroImage}
              objectPosition="center top"
              src="../../images/hero_desktop.png"
              alt="StartDust Jazz Duo hero image"
              placeholder="dominantColor"
              layout="fullWidth"
              fit="cover"
            />
          </Fade>
        </Hidden>
        <Hidden mdUp>
          <Fade in>
            <StaticImage
              className={classes.heroImage}
              objectPosition="center top"
              backgroundColor="#000"
              src="../../images/hero_mobile.png"
              alt="StartDust Jazz Duo hero mobile image"
              placeholder="dominantColor"
              layout="fullWidth"
              fit="cover"
            />
          </Fade>
        </Hidden>
        <Zoom
          in
          style={{
            transitionDelay: "1000ms",
            transitionTimingFunction: "steps(2, end)",
          }}
          timeout={props.isAnimated ? { appear: 0, enter: 4000, exit: 0 } : 0}
        >
          <Box className={classes.heroText} position="absolute" zIndex={1000}>
            <StaticImage
              layout="constrained"
              placeholder="none"
              // width={588}
              // height={419}
              src="../../images/hero_text.png"
              alt="StartDust Jazz Duo"
              transformOptions={{ fit: "cover" }}
            />
          </Box>
        </Zoom>
        <Transition
          appear={true}
          in={true}
          timeout={{ appear: 1000, enter: 5000, exit: 0 }}
        >
          {state => (
            <Box
              className={classes.heroText}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              position="absolute"
              zIndex={1000}
            >
              <StaticImage
                layout="constrained"
                // width={588}
                // height={419}
                placeholder="none"
                src="../../images/hero_text_top.png"
                alt="StartDust Jazz Duo"
                transformOptions={{ fit: "cover" }}
              />
            </Box>
          )}
        </Transition>
        <HeroParticles />
      </Box>
    </>
  )
}

export default Hero
