import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";

export class tagDto{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    createdBy: Types.ObjectId;
}