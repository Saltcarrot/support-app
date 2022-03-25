import { FC } from 'react'

import Authorization from '../components/pages/Auth/Authorization/Authorization'
import PasswordConfirm from '../components/pages/Auth/Password/PasswordConfirm/PasswordConfirm'
import PasswordRecovery from '../components/pages/Auth/Password/PasswordRecovery/PasswordRecovery'
import Registration from '../components/pages/Auth/Registration/Registration'
import Chat from '../components/pages/Chat/Chat'
import GroupedDialogues from '../components/pages/Dialogues/GroupedDialogues/GroupedDialogues'
import SearchDialogues from '../components/pages/Dialogues/SearchDialogues/SearchDialogues'
import UserProfile from '../components/pages/UserProfile/UserProfile'

interface IRoute {
	path: string
	component: FC
}

export const routesList: IRoute[] = [
	{
		path: '/authorization',
		component: Authorization,
	},
	{
		path: '/registration',
		component: Registration,
	},
	{
		path: '/password_recovery',
		component: PasswordRecovery,
	},
	{
		path: '/password_confirm',
		component: PasswordConfirm,
	},
	{
		path: '/dialogues',
		component: SearchDialogues,
	},
	{
		path: '/grouped',
		component: GroupedDialogues,
	},
	{
		path: '/profile',
		component: UserProfile,
	},
	{
		path: '/dialogues/:id',
		component: Chat,
	},
]
