import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UserService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(dto: CreateUserDto) {
	try {
		const userData = await this.userService.create(dto);

		return userData;
	} catch (error) {
		throw new ForbiddenException('Ошибка при регистрации')
	}
  }
}
