import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { MenuWP } from './menu-wp';
import { Website } from './website';

@Injectable()
export class MenuService{

  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http,
    private website: Website
  ) { }

  getMenuWp(id:number): Promise<MenuWP> {
    const url = `${this.website.url}/${this.website.menuWpUrl}/${id}`;
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
