import React from 'react';
import PopoverButton from './PopoverButton.jsx'
import TwitterFeed from './TwitterFeed.jsx'

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
        <div>Home</div>
        <div>About Me</div>
      </div>
    </div>
  )
}

export default NavBar


