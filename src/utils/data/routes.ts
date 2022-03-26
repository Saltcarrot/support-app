import { IRoute } from '../types/routes'

import Authorization from '../../components/pages/Auth/Authorization/Authorization'
import Registration from '../../components/pages/Auth/Registration/Registration'
import PasswordRecovery from '../../components/pages/Auth/Password/PasswordRecovery/PasswordRecovery'
import PasswordConfirm from '../../components/pages/Auth/Password/PasswordConfirm/PasswordConfirm'
import SearchDialogues from '../../components/pages/Dialogues/SearchDialogues/SearchDialogues'
import GroupedDialogues from '../../components/pages/Dialogues/GroupedDialogues/GroupedDialogues'
import UserProfile from '../../components/pages/UserProfile/UserProfile'
import Chat from '../../components/pages/Chat/Chat'

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
