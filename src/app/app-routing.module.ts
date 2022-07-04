import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPage } from "./pages/about/about";
import { ContactPage } from "./pages/contact/contact";
import { LandingPage } from "./pages/landing/landing";
import { PortfolioPage } from './pages/portfolio/portfolio';

@NgModule(
  { exports: [        
      RouterModule
  ],
    imports: [
      RouterModule.forRoot([
        {
          path: 'about',
          component: AboutPage
        },
        {
          path: 'contact',
          component: ContactPage
        },
        {
          path: 'landing',
          component: LandingPage
        },
        {
            path: 'portfolio',
            component: PortfolioPage
        },
        {
            path: '**',
            redirectTo: 'landing'
        }
      ])

    ]
  }
)
export class AppRoutingModule { }
