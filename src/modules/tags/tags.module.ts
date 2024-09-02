import { UserSchema } from './../../core/schemas/user.schema';
import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { Tag, TagSchema } from 'src/core/schemas/tag.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';

@Module({
  imports :[MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema },{ name: User.name, schema: UserSchema }])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {
  
}
