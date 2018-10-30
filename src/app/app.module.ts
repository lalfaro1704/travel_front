// angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { GlobalService } from './services/global.service';
import { ApiService } from './services/services.service';
import { JwtInterceptor } from './services/jwt.interceptor';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelComponent,
    BusComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot(),
    BlockUIModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    appRouters,
    AuthGuard,
    AuthenticationService,
    ApiService,
    GlobalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
