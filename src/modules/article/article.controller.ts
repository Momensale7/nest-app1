import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Get()
  getAllArticle(){
    return this.articleService.getAllArticle()
  }
  @Get(":id")
  getArticleById(@Param('id') id:string ){
    return this.articleService.getArticleById(id)
  }

  @Post()
  addArticle(@Body() body:ArticleDto){
    return this.articleService.addArticle(body)
  }
  @Delete(":id")
  deleteArticle(@Param('id') id:string){
    return this.articleService.deleteArticle(id)
  }

  @Put(':id')
  updateArticle(@Body() body:any ,@Param('id') id:string){
    return this.articleService.updateArticle(body,id)
  }
}
