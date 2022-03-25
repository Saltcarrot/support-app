import { FC } from 'react'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
	Navigate,
} from 'react-router-dom'

import { routesList } from './types/routes'

const Routes: FC = () => {
	return (
		<Router>
			<Switch>
				{routesList.map((route) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<Navigate to='/dialogues' />} />
			</Switch>
		</Router>
	)
}

export default Routes
