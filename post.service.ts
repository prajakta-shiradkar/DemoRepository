import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class PostService {

  constructor(private http :HttpClient) { }

  url : string="http://localhost:3000/posta";

  getData()
  {
    return this.http.get(this.url);
  }

  createPost(post)
  {
    return this.http.post(this.url,post);
  }

  updatePost(post)
  {
    return this.http.put(this.url+'/'+ post.id, post);
  }

  deletePost(id)
  {
    return this.http.delete(this.url+'/'+id);
  }
  
}
 