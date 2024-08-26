import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { logginUser, user } from './dto/user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}
  @Post("signup")
  signUp(@Body() body:user){
    return this._usersService.signUp(body)
  }

  @Post("signin")
  signIn(@Body() body:logginUser){
    return this._usersService.signIn(body)
  }
}
