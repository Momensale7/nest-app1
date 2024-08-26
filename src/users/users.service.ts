import { Injectable } from '@nestjs/common';
import { logginUser, user } from './dto/user.dto';

@Injectable()
export class UsersService {
    users:user[]=[
        {
            name:"momen",
            email:"momen@gmail.com",
            password:123456,
            rePassword:123456,
        }
    ]
    signUp(user:user):string{
        console.log(user);
        let exist=this.users.find(ele=>ele.email==user.email)
        if (exist){
            return "email already registered"
        }
        else {
            this.users.push(user)
            console.log(this.users);
            
            return "signed up successfully"
        }
    }
    signIn(user:logginUser):string{
        let exist=this.users.find(ele=>ele.email==user.email)
        if(exist && exist.password===user.password){
            return "signed in successfully"
        }
        else {
            return "invalid email or password"
        }
    }
}
