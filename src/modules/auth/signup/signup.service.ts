import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signUpDto } from '../authDto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async signUp(body: signUpDto) {
        let user = await this.userModel.findOne({ email: body.email })
        if (user) throw new HttpException('already registerde', HttpStatus.CONFLICT);
        // console.log(body);
        body.password = await bcrypt.hash(body.password, 10);
        const addedUser= await this.userModel.insertMany(body)
        return {message:"success",addedUser}
    }
}
