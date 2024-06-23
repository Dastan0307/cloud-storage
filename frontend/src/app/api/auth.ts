import { destroyCookie } from 'nookies'
import axios from '../core/axios'
import {
	LoginFormDTO,
	LoginResponseDTO,
	RegisterFormDTO,
	RegisterResponseDTO,
	User,
} from './dto/auth.dto'

export const login = async (
	values: LoginFormDTO
): Promise<LoginResponseDTO> => {
	return (await axios.post('/auth/login', values)).data
}

export const register = async (
	values: RegisterFormDTO
): Promise<RegisterResponseDTO> => {
	return (await axios.post('/auth/register', values)).data
}

export const getMe = async (): Promise<User> => {
	return (await axios.get('/me')).data
}

export const logout = async () => {
	destroyCookie(null, '_token', { path: '/' })
}
