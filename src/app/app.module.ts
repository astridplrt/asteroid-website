import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPage } from "./pages/landing/landing";
import { PortfolioPage } from './pages/portfolio/portfolio';
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';
import { Components } from './components/module';

@NgModule({
  declarations: [
    AppComponent,
    AboutPage,
    ContactPage,
    LandingPage,
    PortfolioPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
