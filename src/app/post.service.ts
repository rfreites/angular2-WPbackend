import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Post } from './post';
import { Website } from './website';

@Injectable()
export class PostService {

  constructor(
    private http: Http,
    private website: Website
  ) { }

  getPosts(postType: string): Promise<Post[]> {
    const url = `${this.website.url}/${this.website.restApi}/${postType}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getPostId(postType: string, id: number): Promise<any> {
    const url = `${this.website.url}/${this.website.restApi}/${postType}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getPostDetails(postType: string, slug: string): Promise<any> {
    const url = `${this.website.url}/${this.website.restApi}/${postType}?slug=${slug}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
