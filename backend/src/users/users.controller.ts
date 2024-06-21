import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserId } from 'src/auth/decorators/user-id.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getMe(@UserId() id: number) {
    return this.usersService.findById(id);
  }
}
