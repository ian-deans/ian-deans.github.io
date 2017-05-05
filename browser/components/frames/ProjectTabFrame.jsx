import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import ProjectThumbnailFrame from './ProjectThumbnailFrame.jsx'

const ProjectTabFrame = () => {
  return (
    <SwipeableViews className="project-tabs frame">
      <ProjectThumbnailFrame cssClass="thumbnail tetris"/>
      <ProjectThumbnailFrame cssClass="thumbnail blackjack"/>
      <ProjectThumbnailFrame cssClass="thumbnail calculator"/>
    </SwipeableViews>
  )
}

export default ProjectTabFrame