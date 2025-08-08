import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import LightBlueTheme from '../app/shared/blueTheme';

// PrimeNG Modules
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

// Angular/Bootstrap Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

// Your Components
import { TextareaModule } from 'primeng/textarea';
import { InputMaskModule } from 'primeng/inputmask';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { TabsModule } from 'primeng/tabs';

import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { InputOtpModule } from 'primeng/inputotp';
import { ReactiveFormsModule } from '@angular/forms';

// Import MessageService
import { MessageService } from 'primeng/api'; // <--- Add this import

// import { DropdownModule } from 'primeng/dropdown';
import { Home } from './Components/home/home';
import { Game } from './Components/game/game';
import { Room } from './Components/room/room';
import { Login } from './Components/login/login';

@NgModule({
  declarations: [
    App,
    Home,
    Game,
    Room,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    BreadcrumbModule,
    NgbModule,
    NgbCarouselModule,
    TextareaModule,
    InputMaskModule,
    RatingModule,
    SliderModule,
    TabsModule,
    PaginatorModule,
    InputNumberModule,
    CheckboxModule,
    ToastModule,
    MessageModule,
    InputOtpModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    providePrimeNG({
      theme: {
        preset: LightBlueTheme
      }
    }),
    MessageService, 
  ],
  bootstrap: [App]
})
export class AppModule { }
