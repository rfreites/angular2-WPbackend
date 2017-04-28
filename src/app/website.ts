import { Injectable } from '@angular/core';

@Injectable()
export class Website {

    url: string = 'http://wocker.dev';

    restApi: string = 'wp-json/wp/v2';

    /**
     * Install plugin WP REST API Menus
     */
    menuWpUrl: string = 'wp-json/wp-api-menus/v2/menus';
    
    slider: string = this.restApi+'/slider';
}
