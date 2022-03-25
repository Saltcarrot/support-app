import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './Routes'

import './assets/sass/global.sass'

ReactDOM.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
	document.getElementById('root')
)
