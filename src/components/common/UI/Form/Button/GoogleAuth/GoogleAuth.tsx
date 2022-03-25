import { FC, MouseEvent } from 'react'

import { FaGoogle } from 'react-icons/fa'

import styles from './styles.module.sass'

interface IGoogleAuthProps {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const GoogleAuth: FC<IGoogleAuthProps> = ({ onClick }: IGoogleAuthProps) => {
	return (
		<button className={styles.google} type='button' onClick={onClick}>
			Авторизоваться с помощью <FaGoogle />
		</button>
	)
}

export default GoogleAuth