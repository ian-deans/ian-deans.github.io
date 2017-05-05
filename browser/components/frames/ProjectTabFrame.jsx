import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Tabs, Tab } from 'material-ui/Tabs'
import ProjectCardFrame from './ProjectCardFrame.jsx'

export default class ProjectTabFrame extends React.Component {
  constructor( props ) {
    super( props )
    this.state = { slideIndex: 0 }
  }

  handleChange = value => {
    this.setState({ slideIndex: value })
  }

  render() {
    return (
      <div className="project-tabs frame">
        <Tabs
          className="project-tabs-bar"
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tetris" value={0} />
          <Tab label="Blackjack" value={1} />
          <Tab label="Calculator" value={2} />
        </Tabs>
        <SwipeableViews
          className="project-thumbnail-frame"
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <ProjectCardFrame imgPath="public/tetrisThumbnail.png" frameClass="thumbnail tetris"/>
          <ProjectCardFrame imgPath="public/tetrisThumbnail.png" frameClass="thumbnail blackjack"/>
          <ProjectCardFrame imgPath="public/tetrisThumbnail.png" frameClass="thumbnail calculator"/>
        </SwipeableViews>
      </div>
    )
  }
}
