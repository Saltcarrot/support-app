import { IRoute } from '../types/routes'

import Pages from '../../components/pages'

export const routesList: IRoute[] = [
  {
    path: '/authorization',
    component: Pages.Auth.Authorization,
  },
  {
    path: '/registration',
    component: Pages.Auth.Registration,
  },
  {
    path: '/password_recovery',
    component: Pages.Auth.PasswordRecovery,
  },
  {
    path: '/password_confirm',
    component: Pages.Auth.PasswordConfirm,
  },
  {
    path: '/dialogues',
    component: Pages.Dialogues.Search,
  },
  {
    path: '/grouped',
    component: Pages.Dialogues.Groupe,
  },
  {
    path: '/profile',
    component: Pages.UserProfile,
  },
  {
    path: '/dialogues/:id',
    component: Pages.Chat,
  },
]
