import React from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

export default class TwitterFeed extends React.Component {
  constructor( props ) {
    super( props )
    this.state = { open: false }
  }

  handleToggle = () => this.setState( { open: !this.state.open } )

  render() {
    return (
      <div>
        <FlatButton
          label="Twitter Feed"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          swipeAreaWidth={30}
          className="twitter-feed-drawer"
        >
          <AppBar
            className="twitter-feed-bar"
            title="Twitter"
            onTitleTouchTap={this.handleToggle}
            showMenuIconButton={false}
          >

          </AppBar>
        </Drawer>
      </div>
    )
  }

}