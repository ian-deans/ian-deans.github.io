import React from 'react'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

const style = { color: 'inherit', fontSize: 'inherit', fontFamily: 'inherit' }

const ContactMenu = () => {
  return(
    <Menu
      className="menu-contact"
    >
      <MenuItem className="menu-item" primaryText="twitter" />
      <MenuItem className="menu-item" primaryText="linkedin" />
      <MenuItem className="menu-item" primaryText="udacity" />
      <MenuItem className="menu-item" primaryText="github" />
      <Divider />
      <MenuItem className="menu-item" primaryText="email" />
    </Menu>
  )
}

export default ContactMenu