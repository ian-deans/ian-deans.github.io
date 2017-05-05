import React from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const ProjectThumbnailContainer = () => (
  <Card className="project-card">
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay Subtitle"/>}
    >
      <img src="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb
      Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb Blurb
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
)

export default ProjectThumbnailContainer