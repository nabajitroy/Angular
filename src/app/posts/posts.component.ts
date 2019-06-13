import { Component, OnInit } from "@angular/core";
 import {Http} from '@angular/http';
@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
})

export class PostComponent implements OnInit{
    posts: any[];
    private url ='https://jsonplaceholder.typicode.com/posts';
    constructor(  private http: Http ){
        
    }

    ngOnInit(){
        this.http.get(this.url)
        .subscribe((response)=>{
            this.posts = response.json();
        })
    }

    createPost(input: HTMLInputElement){
       let post = {title: input.value};
       input.value='';
       this.http.post(this.url,JSON.stringify(post))
          .subscribe((response)=>{
              this.posts.splice(0,0,post);
              // console.log(response.json());
          })
    }

updatePost(post){
    this.http.patch(this.url + '/'+post.id,JSON.stringify({isRead:true}))
       .subscribe((response)=>{
           console.log(response.json());
       })
}

deletePost(post){
    let index = this.posts.indexOf(post);
    this.http.delete(this.url + '/'+post.id)
    .subscribe(response =>{
      this.posts.splice(index,1);
    })
}

}