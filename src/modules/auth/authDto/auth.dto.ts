import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class signUpDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(15)
    name:string;
    @IsEmail()
    @IsNotEmpty()
    email:string;
    @IsNotEmpty()
    @IsString()
    password:string;
}

export class signInDto{
    @IsNotEmpty()
    email:string;
    @IsNotEmpty()
    password:string;
}