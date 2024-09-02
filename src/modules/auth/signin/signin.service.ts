import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signInDto } from '../authDto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SigninService {
    constructor(@InjectModel(User.name) private userModel: Model<User>,
    private _jwtservice:JwtService ) { }

    async signIn(body: signInDto) {
        const foundedUser = await this.userModel.findOne({ email: body.email })
        if (foundedUser && await bcrypt.compare(body.password, foundedUser.password)) {
            const token=this._jwtservice.sign({name:foundedUser.name,email:foundedUser.email},{secret:"mo2"})
            return {message:"success",token}
        }
        else throw new HttpException('invalid email or password', HttpStatus.NOT_FOUND);
       
    }
}
