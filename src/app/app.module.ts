import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ModalContactoComponent } from './modal-contacto/modal-contacto.component';
import { CardsComponent } from './cards/cards.component';
import { Website } from './website';
import { RoutingModule } from './routing/routing.module';
import { PageComponent } from './page/page.component';
import { RouterModule }  from '@angular/router';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SliderComponent,
    NavigationComponent,
    ModalContactoComponent,
    CardsComponent,
    PageComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: BodyComponent
      },
      {
        path: 'soluciones/:link',
        component: PageComponent
      }
    ]),
    RoutingModule
  ],
  providers: [Website],
  bootstrap: [AppComponent]
})
export class AppModule { }
