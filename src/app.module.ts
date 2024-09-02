import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './modules/article/article.module';
import { TagsModule } from './modules/tags/tags.module';

@Module({
  imports: [AuthModule,MongooseModule.forRoot('mongodb+srv://momensaleh:momen178@cluster0.o2q5lrr.mongodb.net/medium?retryWrites=true&w=majority&appName=Cluster0'), ArticleModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
