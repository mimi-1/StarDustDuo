import React from "react"
import { Typography, Button, Paper } from "@material-ui/core"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import CallOutlinedIcon from "@material-ui/icons/CallOutlined"
import useStyles from "./contactStyles"
import Social from "../social/social"
import { styled } from "@material-ui/core/styles"
import { compose, spacing, palette } from "@material-ui/system"

const Box = styled("div")(compose(spacing, palette))

const ContactEmail = () => {
  const classes = useStyles()
  // get email and phone from gatsby-config file

  const email = "victor@stardustjazzduo.ca"
  const phone = "+1 (647) 472-1727"

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h3" component="h3" color="primary">
        Contact us using email:
      </Typography>
      <Button
        startIcon={<MailOutlineIcon />}
        style={{ textTransform: "none", margin: 2 }}
        href={`mailto:${email}`}
      >
        <Typography display="block">{email}</Typography>
      </Button>

      <Typography variant="h3" component="h3" color="primary">
        Call us at:
      </Typography>
      <Button
        startIcon={<CallOutlinedIcon />}
        style={{ textTransform: "none", margin: 2 }}
        href={`tel:${phone}`}
      >
        <Typography display="block">{phone}</Typography>
      </Button>

      <Typography variant="h3" component="h3" color="primary">
        Connect with us on our social media:
      </Typography>
      <Box
        bgcolor="primary.dark"
        mt={3}
        mb={3}
        ml={0}
        mr={0}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Social orientation="horizontal" />
      </Box>
    </Paper>
  )
}

export default ContactEmail
