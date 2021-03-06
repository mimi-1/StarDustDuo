import React from "react"
import { Button } from "gatsby-theme-material-ui"
import PropTypes from "prop-types"
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded"
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined"
import { makeStyles } from "@material-ui/core/styles"
import { Hidden } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  linkContainer: {
    textAlign: "right",
    //paddingLeft: theme.spacing(10),
  },
  button: {
    marginRight: theme.spacing(10),
    textTransform: "lowercase",
    fontFamily: "Kaushan Script",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      margin: 0,
    },
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    linkContainer: {
      textAlign: "center",
    },
  },
}))

const MoreLink = props => {
  const classes = useStyles()
  return (
    <div className={classes.linkContainer}>
      <Button
        className={classes.button}
        color="primary"
        to="/about"
        size="small"
        startIcon={<ArrowForwardOutlinedIcon />}
      >
        {props.children}
        <Hidden smDown>
          {props.emotions}&
          <InsertEmoticonRoundedIcon className={classes.icon} />
        </Hidden>
      </Button>
    </div>
  )
}

MoreLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MoreLink
