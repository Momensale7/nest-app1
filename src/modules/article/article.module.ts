import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from 'src/core/schemas/article.schema';

@Module({
  imports :[MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema },{ name: User.name, schema: UserSchema }])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
