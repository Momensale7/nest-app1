import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, ValidateIf, IsNumber } from "class-validator";

export class user {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  password: number;


  @IsNotEmpty()
  rePassword: number;
}


export class logginUser{
    @IsNotEmpty()
    email:string
    @IsNotEmpty()
    password:number
}