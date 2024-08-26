import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';
import { tag } from './tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly _tagsService: TagsService) {}
  @Get()
  getTag(){
    return this._tagsService.getTag()
  }
  @Get("/:id")
  getTagByID(@Param("id") param:any){
    return this._tagsService.getTagById(param)
  }

  @Post()
  addTag(@Body() body:tag){
    return this._tagsService.addTag(body)
  }

  @Delete("/:id")
  deleteTag(@Param("id") param:string ){
    console.log(param);
    
    return this._tagsService.deleteTag(param)
  }

  @Put("/:id")
  updateTag(@Param("id") param:string, @Body() body:tag){
    return this._tagsService.updateTag(param,body)
  }
}
