import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Tabs, Tab } from 'material-ui/Tabs'
import ProjectThumbnailFrame from './ProjectThumbnailFrame.jsx'

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
          className="project-tabs"
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tetris" value={0} />
          <Tab label="Blackjack" value={1} />
          <Tab label="Calculator" value={2} />
        </Tabs>
        <SwipeableViews
          className="project-tabs-swipeable"
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <ProjectThumbnailFrame cssClass="thumbnail tetris"/>
          <ProjectThumbnailFrame cssClass="thumbnail blackjack"/>
          <ProjectThumbnailFrame cssClass="thumbnail calculator"/>
        </SwipeableViews>
      </div>
    )
  }
}
