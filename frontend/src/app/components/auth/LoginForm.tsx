'use client'

import { LoginFormDTO } from '@/app/api/dto/auth.dto'
import { Button, Form, Input, notification } from 'antd'
import { setCookie } from 'nookies'
import { FC } from 'react'
import styles from './Auth.module.scss'

import * as Api from '../../api'

export const LoginForm: FC = () => {
	const onSubmit = async (values: LoginFormDTO) => {
		try {
			const { token } = await Api.auth.login(values)

			notification.success({
				message: 'Успешно!',
				description: 'Переходим в админ панель ...',
				duration: 2,
			})

			setCookie(null, '_token', token, {
				path: '/',
			})
		} catch (error) {
			console.warn('LoginError', error)
		}
	}

	return (
		<div className={styles.formBlock}>
			<Form
				name='basic'
				labelCol={{
					span: 8,
				}}
				onFinish={onSubmit}
			>
				<Form.Item
					label='E-mail'
					name='email'
					rules={[
						{
							required: true,
							message: 'Укажите почту',
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Пароль'
					name='password'
					rules={[
						{
							required: true,
							message: 'Укажите пароль',
						},
					]}
				>
					<Input.Password />
				</Form.Item>
				<Button type='primary' htmlType='submit'>
					Войти
				</Button>
			</Form>
		</div>
	)
}
