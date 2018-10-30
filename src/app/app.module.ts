// angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3rd party components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';

// my components
import { AppComponent } from './app.component';
import { appRouters, routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { TravelComponent } from './components/travel/travel.component';
import { BusComponent } from './components/bus/bus.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

// my services/pipes
import { AuthGuard } from './services/auth.guard';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelComponent,
    BusComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    BlockUIModule.forRoot(),
  ],
  providers: [
    appRouters,
    AuthGuard,
    AuthenticationService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
