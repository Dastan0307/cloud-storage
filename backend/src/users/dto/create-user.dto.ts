import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@gmail.com',
  })
  email: string;

  @ApiProperty({
    default: 'Дастан',
  })
  fullname: string;

  @ApiProperty({
    default: '123',
  })
  password: string;
}
