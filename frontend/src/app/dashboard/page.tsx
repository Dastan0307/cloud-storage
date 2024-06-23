import { LoginForm } from '@/app/components/auth/LoginForm'
import { Tabs } from 'antd'
import { NextPage } from 'next'
import Head from 'next/head'
import { RegisterForm } from '../components/auth/RegisterForm'

const AuthPage: NextPage = () => {

	return (
		<>
			<Head>
				<title>dashboard </title>
			</Head>
			<main style={{ width: 400, margin: '50px auto' }}>
				<Tabs
					items={[
						{
							label: 'Войти',
							key: '1',
							children: <LoginForm />,
						},
						{
							label: 'Регистрация',
							key: '2',
							children: <RegisterForm />,
						},
					]}
				/>
			</main>
		</>
	)
}

export default AuthPage
