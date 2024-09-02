import { Article } from './../../core/schemas/article.schema';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArticleDto } from './dto/article.dto';
import { User } from 'src/core/schemas/user.schema';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private articleModel: Model<Article>, @InjectModel(User.name) private userModel: Model<User>) { }

    async getAllArticle() {
        const allArticle = await this.articleModel.find().populate('createdBy tags', 'name email title -_id ')
        return allArticle
    }

    async getArticleById(id: string) {
        const Article = await this.articleModel.findById(id)
        if (!Article) throw new HttpException('article not founded', HttpStatus.NOT_FOUND);

        return Article
    }


    async addArticle(Article: ArticleDto) {
        const { createdBy, ...aricleContent } = Article
        let user = await this.userModel.findById(createdBy)
        if (!user) return 'not autharized'
        let article = await this.articleModel.insertMany({ ...aricleContent, createdBy: user._id })
        return { message: 'added', Article: article }
    }


    async deleteArticle(id) {
        const founded = await this.articleModel.findById(id)
        if (founded) {
            await this.articleModel.findByIdAndDelete(id)
            return { message: 'deleted successfully' }
        }
        return { message: "not found" }
    }

    async updateArticle(body, id) {
        const founded = await this.articleModel.findById(id)
        if (founded) {
            let article = await this.articleModel.findByIdAndUpdate(id, body, { new: true })
            return { message: "message Updated succesfully", article: article };
        }
        return  { message: "not found" }
    }
}
