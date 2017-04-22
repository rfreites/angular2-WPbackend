import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { MenuWP } from './menu-wp';

@Injectable()
export class MenuService{

  private wpBackend = 'http://wp.dev';

  private menuWpUrl = 'wp-json/wp-api-menus/v2/menus';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) { }

  getMenuWp(id:number): Promise<MenuWP> {
    const url = `${this.wpBackend}/${this.menuWpUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as MenuWP)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
