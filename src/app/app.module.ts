import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Components } from './components/module';
import { LandingPage } from "./pages/landing/landing";
import { PortfolioPage } from './pages/portfolio/portfolio';
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';
import { AmbrussumPage } from './pages/portfolio-detail/ambrussum';
import { AnfaPage } from './pages/portfolio-detail/anfa';
import { OpenworkersPage } from './pages/portfolio-detail/openworkers';

@NgModule({
  declarations: [
    AppComponent,
    AboutPage,
    ContactPage,
    LandingPage,
    PortfolioPage,
    AmbrussumPage,
    AnfaPage,
    OpenworkersPage
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
