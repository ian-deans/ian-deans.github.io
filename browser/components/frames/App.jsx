import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {grey900, blueGrey900, grey400, grey100,lightGreenA100} from 'material-ui/styles/colors'
// import typography from

import NavBar from '../containers/NavBar.jsx'
import ContactMenu from '../containers/menus/ContactMenu.jsx'
import ProjectInfoFrame from './ProjectInfoFrame.jsx'
import ProjectTabFrame from './ProjectTabFrame.jsx'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey900,
    primary2Color: blueGrey900,
    primary3Color: grey900,
    accent1Color: lightGreenA100,
    accent2Color: blueGrey900,
    accent3Color: grey100,
    textColor: lightGreenA100,
    alternateTextColor: lightGreenA100,
    canvasColor: grey900,
    borderColor: grey900,
    pickerHeaderColor: grey900,
  }

})

const App = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="page">
        
        <NavBar
          popoverLabel="Contact"
          popoverMenu={<ContactMenu/>}
        />

        <ProjectTabFrame/>

      </div>
    </MuiThemeProvider>
  )
}

export default App
