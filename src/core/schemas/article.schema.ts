import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import mongoose from "mongoose";

@Schema({timestamps:true,versionKey:false})
export class Article {

    @Prop({required:true})
    title:string;

    @Prop({required:true})
    slug:string;

    @Prop({required:true})
    content:string;

    @Prop({required:true})
    likes:string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })    
    createdBy:User;

    // @Prop({required:true})
    // tags:string;


}
export const ArticleSchema = SchemaFactory.createForClass(Article);