import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPage } from "./pages/about/about";
import { ContactPage } from "./pages/contact/contact";
import { LandingPage } from "./pages/landing/landing";
import { PortfolioPage } from './pages/portfolio/portfolio';
import { AmbrussumPage } from './pages/portfolio-detail/ambrussum';
import { AnfaPage } from './pages/portfolio-detail/anfa';
import { OpenworkersPage } from './pages/portfolio-detail/openworkers';

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
            path: 'ambrussum',
            component: AmbrussumPage
        },
        {
            path: 'anfa',
            component: AnfaPage
        },
        {
            path: 'openworkers',
            component: OpenworkersPage
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
