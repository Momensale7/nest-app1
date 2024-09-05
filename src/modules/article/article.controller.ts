import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

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
  @UseGuards(AuthGuard)
  addArticle(@Body() body:ArticleDto,@Req() req:any){
    body.createdBy=req['userId']
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
