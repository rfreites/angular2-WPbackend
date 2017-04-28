import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { MenuWP } from '../menu-wp';
import { MenuLinkWP } from '../menu-link-wp';
import { MenuService } from '../menu.service';
declare var jQuery: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [MenuService]
})
export class NavigationComponent implements OnInit, AfterViewInit{

  menu: MenuWP;

  links: MenuLinkWP[];

  //id Main Menu
  private idMenu = 2;

  constructor(
    private menuService: MenuService,
    private _elRef: ElementRef
    ) { }

  getMenuWpData(): void {
    this.menuService.getMenuWp(this.idMenu).then(response => {
      this.menu = response;
      this.links = this.menu.items;
    });
  }

  ngOnInit(): void {
    this.getMenuWpData();
  }

  ngAfterViewInit() {
    
  }

}
