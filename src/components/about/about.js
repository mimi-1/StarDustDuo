//https://www.digitalocean.com/community/tutorials/how-to-handle-images-with-graphql-and-the-gatsby-image-api

import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, withArtDirection } from "gatsby-plugin-image"

import { Button, Fab } from "gatsby-theme-material-ui"
import UpIcon from "@material-ui/icons/KeyboardArrowUp"

import aboutdata from "../../data/about"
import GatsbyMuiAvatar from "../avatar/avatar"
import { makeStyles } from "@material-ui/core/styles"
import Section from "../layout/section"
import MoreLink from "../utils/morelink"

const useStyles = makeStyles(theme => ({
  skipLink: {
    position: "absolute",
    //bottom: theme.spacing(1),
    right: theme.spacing(0),
  },
}))

const About = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      zhanna: file(name: { eq: "zhanna" }) {
        relativePath
        largeImage: childImageSharp {
          gatsbyImageData(
            formats: WEBP
            width: 250
            aspectRatio: 1
            transformOptions: { fit: COVER, cropFocus: ENTROPY }
          )
        }
        smallImage: childImageSharp {
          gatsbyImageData(
            width: 100
            aspectRatio: 1.8
            transformOptions: { fit: COVER, cropFocus: NORTH }
          )
        }
      }
      victor: file(name: { eq: "victor" }) {
        relativePath
        largeImage: childImageSharp {
          gatsbyImageData(
            formats: WEBP
            width: 250
            aspectRatio: 1
            transformOptions: { fit: COVER, cropFocus: NORTHEAST }
          )
        }
        smallImage: childImageSharp {
          gatsbyImageData(
            width: 100
            aspectRatio: 1.5
            transformOptions: { fit: COVER, cropFocus: NORTH }
          )
        }
      }
    }
  `)

  return (
    <Section heading="About">
      <Grid container spacing={3}>
        {aboutdata.map(person => (
          <Grid item key={person.name} xs={12} lg={6}>
            <Typography
              variant="h3"
              className="mobile-header"
              component="h3"
              gutterBottom
            >
              {person.name}
            </Typography>

            <GatsbyMuiAvatar
              images={withArtDirection(
                getImage(data[person.avatar].largeImage),
                [
                  {
                    media: "(max-width: 1280px)",
                    image: getImage(data[person.avatar].smallImage),
                  },
                ]
              )}
            ></GatsbyMuiAvatar>
            <Typography
              variant="body1"
              className="mobile-header"
              component="p"
              gutterBottom
            >
              {person.text.substring(0, 200)}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <MoreLink>find more about us</MoreLink>
      {/* <div>
        <Fab className={classes.skipLink} to="#" color="secondary">
          <UpIcon />
        </Fab>
      </div> */}
    </Section>
  )
}

export default About