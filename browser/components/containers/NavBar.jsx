import React from 'react';
import PopoverButton from './PopoverButton.jsx'
import TwitterFeed from './TwitterFeed.jsx'
import FlatButton from 'material-ui/FlatButton'

const NavBar = props => {
  return (
    <div className="navbar-container">
      <div className="navbar-subcontainer top">
        <PopoverButton
          menu={props.popoverMenu}
          label={props.popoverLabel}
        />
        <TwitterFeed />
      </div>
      <div className="navbar-subcontainer bottom">
        <FlatButton label="Home"/>
        <FlatButton label="About Me"/>
      </div>
    </div>
  )
}

export default NavBar


