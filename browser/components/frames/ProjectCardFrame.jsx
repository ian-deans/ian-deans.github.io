import React from 'react'
import ProjectThumbnailContainer from '../containers/ProjectThumbnailContainer.jsx'

const ProjectThumbnailFrame = props => {
  return (
    <div className={props.cssClass}>
      <ProjectThumbnailContainer />
    </div>
  )
}

export default ProjectThumbnailFrame