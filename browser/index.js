import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/frames/App.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
)