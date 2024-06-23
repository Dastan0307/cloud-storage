import axios from 'axios'
import { LoginFormDTO, LoginResponseDTO } from './dto/auth.dto'

export const login = async (
	values: LoginFormDTO
): Promise<LoginResponseDTO> => {
	return (await axios.post('/auth/login', values)).data
}
