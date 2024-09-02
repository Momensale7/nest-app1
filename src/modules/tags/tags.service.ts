import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from 'src/core/schemas/tag.schema';
import { User } from 'src/core/schemas/user.schema';
import { TagsModule } from './tags.module';
import { tagDto } from './dto/tag.dto';

@Injectable()
export class TagsService {
    constructor(@InjectModel(Tag.name) private tagsModel
    : Model<Tag>, @InjectModel(User.name) private userModel: Model<User>) { }
    async getTag(){
        const tags= await this.tagsModel
        .find().populate("createdBy","name email -_id")
        return tags
    }
// *===add tag
    async addTag(body:tagDto){
        const { createdBy, ...aricleContent } = body
    const foundeduUser = await this.userModel.findById(createdBy)
    if(!foundeduUser) return "not authorized"
    const addedTag = await this.tagsModel
    .insertMany({ ...aricleContent, createdBy: foundeduUser._id })
    return { message: 'added', addedTag: addedTag }
    }
// *=====delete 
    async deleteTag(id){
        const founded =await this.tagsModel.findById(id)
        if(!founded) return "tag not founded" 
        const deleted = await this.tagsModel.findByIdAndDelete(id)
        return {message:"deleted successfully ", deleted }
    }
    async updateTag(id,body){
        const founded =await this.tagsModel.findById(id)
        if(!founded) return "tag not founded" 
        const updated = await this.tagsModel.findByIdAndUpdate(id,body,{new:true})
        return {message:"deleted successfully ", updated }
    }
}
