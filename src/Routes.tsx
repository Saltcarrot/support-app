import { FC, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'

import Pages from './components/pages'

const Routes: FC = () => {
  const { user } = useTypedSelector((state) => state.user)
  const {
    user: { checkAuth },
  } = useActions()

  useEffect(() => {
    if (user) {
      checkAuth()
    }
  }, [checkAuth, user])

  return (
    <Router>
      {user ? (
        <Switch>
          <Route path='/dialogues' element={<Pages.Dialogues.Search />} />
          <Route path='/dialogues/opened' element={<Pages.Dialogues.Group />} />
          <Route path='/dialogues/active' element={<Pages.Dialogues.Group />} />
          <Route path='/dialogues/closed' element={<Pages.Dialogues.Group />} />
          <Route path='/dialogues/saved' element={<Pages.Dialogues.Group />} />
          <Route path='/dialogues/:id' element={<Pages.Chat />} />
          <Route path='/profile' element={<Pages.UserProfile />} />
          <Route path='*' element={<Navigate to='/dialogues' />} />
        </Switch>
      ) : (
        <Switch>
          <Route path='/authorization' element={<Pages.Auth.Authorization />} />
          <Route path='/registration' element={<Pages.Auth.Registration />} />
          <Route
            path='/password_recovery'
            element={<Pages.Auth.PasswordRecovery />}
          />
          <Route
            path='/password_recovery/confirm'
            element={<Pages.Auth.PasswordConfirm />}
          />
          <Route path='*' element={<Navigate to='/authorization' />} />
        </Switch>
      )}
    </Router>
  )
}

export default Routes
