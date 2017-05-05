import React from 'react'
import ProjectCardContainer from '../containers/ProjectCardContainer.jsx'

const ProjectCardFrame = props => {
  return (
    <div className={props.frameClass}>
      <ProjectCardContainer imgPath={props.imgPath}/>
    </div>
  )
}

export default ProjectCardFrame