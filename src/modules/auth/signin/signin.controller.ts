import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { signInDto } from '../authDto/auth.dto';

@Controller('signin')
export class SigninController {
  constructor(private readonly signinService: SigninService) {}
  @Post()
  signIn(@Body() body:signInDto){
    return this.signinService.signIn(body)
  }
}
