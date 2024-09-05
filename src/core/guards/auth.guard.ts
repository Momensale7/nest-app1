import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService: JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req =context.switchToHttp().getRequest();
    const {token} =req.headers;
    if (token) {
      const decoded=this._jwtService.verify(token,{secret:"mo2"});
      if (decoded) {
        req['userId']=decoded.userId;
        console.log(decoded.userId);
        return true
      }
      else return false
    }
    else return false
  }
}
