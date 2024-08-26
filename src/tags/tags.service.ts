import { Body, Injectable } from '@nestjs/common';
import { tag } from './tags.dto';

@Injectable()
export class TagsService {
    tags :tag[] = [
        {
            id: "1",
            name: 'JavaScript',
        },
        {
            id: "2",
            name: 'Web Development',
        },
        {
            id: "3",
            name: 'React',
        },
    ]

    getTag(){
        return this.tags
    }
    getTagById(id:string){
        return this.tags.find(tag=>tag.id==id)
    }
    addTag(body:tag){
        body.id=(this.tags.length + 1).toString()
        this.tags.push(body)
        return this.tags
    }
    deleteTag(id:string){
       this.tags= this.tags.filter(ele=>ele.id != id)
        return this.tags
    }
    updateTag(id:string,body:tag){
        const index =this.tags.findIndex(ele=>ele.id==id)
        this.tags[index].name=body.name
        console.log(id,body,index);
        
        return this.tags[index]
    }
}
