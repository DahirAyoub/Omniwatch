import {
	HiOutlineViewGrid,
	HiOutlineCube,
    HiOutlineUserGroup,
	HiOutlineLogout,
	HiOutlineLogin,

} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'logs',
		label: 'Logs',
		path: '/logs',
		icon: <HiOutlineCube />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/users',
		icon: <HiOutlineUserGroup />
	}

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'Logout',
		label: 'Logout',
		path: '/Logout',
		icon: <HiOutlineLogout />
	},
	{
		key: 'login',
		label: 'Login',
		path: '/Login',
		icon: <HiOutlineLogin/>
	}
]