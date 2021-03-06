import React from "react"
import PropTypes from "prop-types"
import { IconButton } from "gatsby-theme-material-ui"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"
import FacebookIcon from "@material-ui/icons/Facebook"
import YouTubeIcon from "@material-ui/icons/YouTube"
import InstagramIcon from "@material-ui/icons/Instagram"
// import TwitterIcon from "@material-ui/icons/Twitter"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  groupVertical: {
    margin: 0,
    marginBottom: "calc(100vh/4)",
  },
  button: {
    border: "0px",
    // color: theme.palette.primary.light,
    text: {
      textShadow: "4px 4px 8px #FFFFFF",
    },
  },
}))

const social = [
  {
    name: "YouTube",
    icon: YouTubeIcon,
    href: "https://www.youtube.com/channel/UCDi1qcqCETpfWFFNV4gXKYQ",
    tooltip: "Follow us on YouTube",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/stardustjazzduo/",
    tooltip: "Follow us on Instagram",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/TheBestJazzExperience",
    tooltip: "Follow us on Facebook",
  },
]

// const icons = {
//   YouTube: YouTubeIcon,
//   Instagram: InstagramIcon,
//   Facebook: FacebookIcon,
// }

const Social = ({ orientation }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ButtonGroup
        className={
          orientation === "vertical" ? classes.groupVertical : undefined
        }
        orientation={orientation}
        aria-label="social media links group"
        variant="text"
      >
        {social.map(channel => {
          // const icon = icons[channel.name]
          // console.log("Icon: ", icon)
          return (
            <Tooltip
              key={channel.name}
              title={channel.tooltip}
              placement="right-start"
              color="secondary"
            >
              <IconButton
                to={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.button}
                key={channel.name}
              >
                <channel.icon />
              </IconButton>
            </Tooltip>
          )
        })}
      </ButtonGroup>
    </div>
  )
}

//orientation vertical or horizontal
Social.propTypes = {
  orientation: PropTypes.string.isRequired,
}
export default Social
