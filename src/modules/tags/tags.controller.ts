import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';
import { tagDto } from './dto/tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @Get()
  getTag(){
    return this.tagsService.getTag()
  }

  @Post()
  addTag(@Body() body:tagDto){
    return this.tagsService.addTag(body)
  }
  @Delete("/:id")
  deleteTag(@Param("id") id:string ){
    return this.tagsService.deleteTag(id)
  }

  @Put(":id")
  updateTag(@Param("id") id:string, @Body() body:any){
    return this.tagsService.updateTag(id,body)
  }
}
