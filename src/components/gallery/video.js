import React from "react"
import ReactPlayer from "react-player/lazy"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
// import PlayArrowIcon from "@material-ui/icons/PlayArrow"
// import { withStyles } from "@material-ui/core/styles"

// const StyledPlayIcon = withStyles(theme => ({
//   root: {
//     color: theme.palette.primary.main,
//   },
// }))(PlayArrowIcon)

const useStyles = makeStyles(theme => {
  return {
    root: {
      // minWidth: "15em",
      margin: "2px",
      background: theme.palette.black.light,
      height: 500,
    },
    video: {
      // width: 420,
      width: "100%",
      height: 360,
    },
  }
})

const Video = props => {
  const classes = useStyles()
  console.log(props.description)
  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
        <CardMedia className={classes.video}>
          <ReactPlayer
            url={`https://www.youtube.com/embed/${props.videoId}`}
            width="100%"
            // light={true}
            // playIcon={
            //   <PlayArrowIcon color="primary" style={{ fontSize: 50 }} />
            // }
            controls={true}
            previewTabIndex={1}
            style={{ margin: "2px" }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  // origin:{}
                  widget_referrer: "www.stardustjazzduo.ca",
                },
                embedOptions: {
                  frameborder: 1,
                },
              },
            }}
          />
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="caption"
          style={{ fontSize: "0.7em" }}
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Video
