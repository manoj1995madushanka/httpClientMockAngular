import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private httpClient: HttpClient) { }

  getPosts()
  {
    return this.httpClient.get('http://localhost:3000/posts');// we don't need headers and params for this endpoint
  }
}
