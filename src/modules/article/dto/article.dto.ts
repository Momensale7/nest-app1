import { IsString, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class ArticleDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    likes: string;
    @IsNotEmpty()
    createdBy: Types.ObjectId;
}
