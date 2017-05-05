import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover'

export default class PopoverButton extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      open: false,
      menu: this.props.menu,
      label: this.props.label,
    }
  }
  
  handleTouchTap = event => {
    event.preventDefault()
    
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }
  
  handleRequestClose = () => {
    this.setState({
      open: false,
    })
  }
  
  render() {
    const style = { backgroundColor: 'inherit', fontColor: 'inherit', fontFamily: 'inherit' }
    return (
      <div className="popover-button">
        <FlatButton
          onTouchTap={this.handleTouchTap}
          label={this.state.label}
          className="popover-button"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
          className="popover-button"
        >
          {this.state.menu}
        </Popover>
      </div>
    )
  }
  
}