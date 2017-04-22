import { Component, OnInit } from '@angular/core';

import { MenuWP } from '../menu-wp';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [MenuService]
})
export class NavigationComponent implements OnInit {

  menu: MenuWP;

  private idMenu = 2;

  constructor(private menuService: MenuService) { }

  getMenuWpData(): void {
    this.menuService.getMenuWp(this.idMenu).then(menu => this.menu = menu);
  }

  ngOnInit(): void {
    this.getMenuWpData();
    console.log(this.menu);
  }

}
