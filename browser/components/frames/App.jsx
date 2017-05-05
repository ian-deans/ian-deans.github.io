import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {grey900, lightGreenA100} from 'material-ui/styles/colors'
// import typography from

import NavBar from '../containers/NavBar.jsx'
import ContactMenu from '../containers/menus/ContactMenu.jsx'
import ProjectInfoFrame from './ProjectInfoFrame.jsx'
import ProjectTabFrame from './ProjectTabFrame.jsx'

const muiTheme = getMuiTheme({
  palette: {
    textColor: lightGreenA100,
  },
  raisedButton: {
    primaryColor: grey900,
    color: grey900,
    //textColor: lightGreenA100,
  }

})

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="page">
        
        <div className="navbar frame">
          <NavBar
            popoverLabel="Contact"
            popoverMenu={<ContactMenu/>}
          />
        </div>

        <ProjectTabFrame/>
        <ProjectInfoFrame/>

      </div>
    </MuiThemeProvider>
  )
}

export default App
