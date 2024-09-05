import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
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
    @IsOptional()
    createdBy: Types.ObjectId;
    @IsNotEmpty()
    tags: string[];
}
