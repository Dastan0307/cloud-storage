import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategies'
import { PassportModule } from '@nestjs/passport'

@Module({
  controllers: [AuthController, PassportModule],
  providers: [AuthService, LocalStrategy],
  imports: [AuthService],
})
export class AuthModule {}
