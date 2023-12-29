import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';
import { LandingPage } from './pages/landing/landing';
import { PortfolioPage } from './pages/portfolio/portfolio';
import { AmbrussumPage } from './pages/portfolio-detail/ambrussum';
import { AnfaPage } from './pages/portfolio-detail/anfa';
import { ATS3Page } from './pages/portfolio-detail/ats3';
import { BarfishPage } from './pages/portfolio-detail/barfish';
import { BarrAvelPage } from './pages/portfolio-detail/barravel';
import { BreizhBricoPage } from './pages/portfolio-detail/breizhbrico';
import { BulotPage } from './pages/portfolio-detail/bulot';
import { CarantecPage } from './pages/portfolio-detail/carantec';
import { DevcatPage } from './pages/portfolio-detail/devcat';
import { DirectImmoPage } from './pages/portfolio-detail/directimmo';
import { ForceWestPage } from './pages/portfolio-detail/forcewest';
import { ImpressionsChinoisesPage } from './pages/portfolio-detail/impressionschinoises';
import { LaillePage } from './pages/portfolio-detail/laille';
import { OctopusPage } from './pages/portfolio-detail/octopus';
import { OldDoorForestPage } from './pages/portfolio-detail/olddoorforest';
import { OpenworkersPage } from './pages/portfolio-detail/openworkers';
import { RetroLegendPage } from './pages/portfolio-detail/retrolegend';
import { SpiAsymetriquePage } from './pages/portfolio-detail/spiasymetrique';
import { VolagePage } from './pages/portfolio-detail/volage';

@NgModule({
  exports: [RouterModule],
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
        path: 'ats3',
        component: ATS3Page
      },
      {
        path: 'barfish',
        component: BarfishPage
      },
      {
        path: 'barravel',
        component: BarrAvelPage
      },
      {
        path: 'breizhbrico',
        component: BreizhBricoPage
      },
      {
        path: 'bulot',
        component: BulotPage
      },
      {
        path: 'carantec',
        component: CarantecPage
      },
      {
        path: 'devcat',
        component: DevcatPage
      },
      {
        path: 'directimmo',
        component: DirectImmoPage
      },
      {
        path: 'forcewest',
        component: ForceWestPage
      },
      {
        path: 'impressionschinoises',
        component: ImpressionsChinoisesPage
      },
      {
        path: 'laille',
        component: LaillePage
      },
      {
        path: 'octopus',
        component: OctopusPage
      },
      {
        path: 'olddoorforest',
        component: OldDoorForestPage
      },
      {
        path: 'openworkers',
        component: OpenworkersPage
      },
      {
        path: 'retrolegend',
        component: RetroLegendPage
      },
      {
        path: 'spiasymetrique',
        component: SpiAsymetriquePage
      },
      {
        path: 'volage',
        component: VolagePage
      },
      {
        path: '**',
        redirectTo: 'landing'
      }
    ])
  ]
})
export class AppRoutingModule {}
